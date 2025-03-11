// Hàm hiển thị section được chọn
function showSection(sectionId) {
    // Ẩn tất cả các section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Hiển thị section được chọn
    document.getElementById(sectionId).classList.add('active');
    
    // Cập nhật trạng thái active trên menu
    document.querySelectorAll('.menu a').forEach(link => {
        link.classList.remove('active');
    });
    
    // Đánh dấu menu item hiện tại là active
    document.querySelector(`.menu a[href="#${sectionId}"]`).classList.add('active');
}

// Xử lý form liên hệ
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        // Ở đây bạn sẽ thêm code để gửi dữ liệu đến server
        // Hiện tại chỉ hiển thị thông báo đơn giản
        alert(`Cảm ơn ${name} đã liên hệ với chúng tôi. Chúng tôi sẽ phản hồi qua email ${email} sớm nhất có thể.`);
        
        // Reset form
        document.getElementById('contactForm').reset();
    } else {
        alert('Vui lòng điền đầy đủ thông tin!');
    }
}

// Lắng nghe sự kiện khi trang được tải
document.addEventListener('DOMContentLoaded', function() {
    // Xử lý hash URL để hiển thị đúng section khi refresh trang
    const hash = window.location.hash.substring(1);
    if (hash && document.getElementById(hash)) {
        showSection(hash);
    }
    
    // Thêm animation cho các card khi cuộn trang
    window.addEventListener('scroll', function() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Thêm style cho animation card
    const style = document.createElement('style');
    style.innerHTML = `
        .card {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
    `;
    document.head.appendChild(style);
});