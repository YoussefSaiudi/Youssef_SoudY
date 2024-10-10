// إضافة تفاعل عند الضغط على الأزرار
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.querySelector('.download-btn');
    const whatsappBtn = document.querySelector('.whatsapp-btn');

    // تفاعل زر تحميل السيرة الذاتية
    downloadBtn.addEventListener('click', function() {
        alert('Your CV is downloading!');
    });

    // تفاعل زر واتساب
    whatsappBtn.addEventListener('click', function() {
        alert('You will be redirected to WhatsApp!');
    });
});
