// Đăng ký ScrollTrigger plugin với GSAP
gsap.registerPlugin(ScrollTrigger);

// Kiểm tra người dùng có bật chế độ giảm chuyển động (prefers-reduced-motion) không
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  /* ==========================================================================
     PHẦN 1: GẮN CHẶT VỚI THANH CUỘN (SCRUB / SCROLL-LINKED)
     - Cuộn đến đâu animation chạy đến đó.
     - Dừng cuộn thì đứng yên, cuộn ngược thì tua lùi lại chính xác từng chút.
     ========================================================================== */

  // A. Thanh tiến trình đọc trang gắn chặt với toàn bộ độ dài trang
  gsap.to('.scroll-progress-bar', {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.2 // làm mềm chuyển động 0.2s khi lăn chuột
    }
  });

  // B. Hiệu ứng Parallax ở Hero: khi cuộn xuống, nội dung trôi chậm và mờ dần theo vị trí cuộn
  gsap.to('#top .container', {
    scrollTrigger: {
      trigger: '#top',
      start: 'top top',
      end: 'bottom top',
      scrub: true // bám sát 100% với tốc độ cuộn
    },
    y: 80,
    opacity: 0.15,
    ease: 'none'
  });

  // C. Lộ trình 20 tuần gắn chặt với thanh cuộn:
  // Khi bạn cuộn qua vùng này, các tuần (1-6, 7-13, 14-18, 19-20) lần lượt trượt vào và sáng dần.
  // Cuộn nửa chừng thì dừng ở 50%, cuộn ngược lên trên thì các mục sẽ tự động lùi ngược lại!
  gsap.from('#lo-trinh .list-group-item', {
    scrollTrigger: {
      trigger: '#lo-trinh .roadmap',
      start: 'top 80%',
      end: 'bottom 75%',
      scrub: 1 // độ trễ làm mượt 1s tạo cảm giác quán tính rất cao cấp
    },
    x: -60,
    opacity: 0.15,
    stagger: 0.3,
    ease: 'power1.out'
  });

  /* ==========================================================================
     PHẦN 2: KÍCH HOẠT THEO NGƯỠNG (TRIGGER CHẠY TỰ DO 1 LẦN)
     Giữ nguyên cho các phần khác để trang cân bằng, không bị rối mắt
     ========================================================================== */

  // 1. Hero khi vừa tải trang
  gsap.from('#top h1, #top p, #top .btn', {
    y: 35,
    opacity: 0,
    duration: 0.9,
    stagger: 0.18,
    ease: 'power3.out',
    delay: 0.2
  });

  // 2. Tiêu đề các mục
  ['#loi-ich h2', '#lo-trinh h2', '#hoc-vien h2'].forEach(selector => {
    gsap.from(selector, {
      scrollTrigger: {
        trigger: selector,
        start: 'top 85%',
        once: true
      },
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: 'power2.out'
    });
  });

  // 3. 3 thẻ Lợi ích
  gsap.from('#loi-ich .from-left', {
    scrollTrigger: { trigger: '#loi-ich .row', start: 'top 80%', once: true },
    x: -60, opacity: 0, duration: 0.9, ease: 'power2.out'
  });
  gsap.from('#loi-ich .from-zoom', {
    scrollTrigger: { trigger: '#loi-ich .row', start: 'top 80%', once: true },
    scale: 0.85, y: 30, opacity: 0, duration: 0.9, delay: 0.15, ease: 'power2.out'
  });
  gsap.from('#loi-ich .from-right', {
    scrollTrigger: { trigger: '#loi-ich .row', start: 'top 80%', once: true },
    x: 60, opacity: 0, duration: 0.9, delay: 0.3, ease: 'power2.out'
  });

  // 4. Testimonial Carousel
  gsap.from('#hoc-vien #carousel', {
    scrollTrigger: { trigger: '#hoc-vien', start: 'top 80%', once: true },
    scale: 0.92, opacity: 0, duration: 0.8, ease: 'back.out(1.4)'
  });

  // 5. Form đăng ký
  gsap.from('#dang-ky .card', {
    scrollTrigger: { trigger: '#dang-ky', start: 'top 80%', once: true },
    y: 50, opacity: 0, duration: 0.8, ease: 'power3.out'
  });
}

// Form đăng ký: kiểm tra đơn giản, chưa gửi dữ liệu đi đâu
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const msg = document.getElementById('msg');
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();

  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !/^[0-9+\s]{9,13}$/.test(phone)) {
    msg.className = 'text-center mt-3 mb-0 text-danger';
    msg.textContent = 'Vui lòng nhập đủ họ tên, email và số điện thoại hợp lệ.';
    return;
  }
  msg.className = 'text-center mt-3 mb-0 text-success';
  msg.textContent = 'Đã gửi đăng ký. CodeGym sẽ liên hệ với bạn sớm.';
  e.target.reset();
});
