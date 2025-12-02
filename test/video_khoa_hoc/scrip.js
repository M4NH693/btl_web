function list_dropdown_f(titleElement) {
    // lấy ra ul.dropdown ngay bên dưới .list_title
    let dropdown = titleElement.parentElement.nextElementSibling;
    dropdown.classList.toggle('active');
      titleElement.classList.toggle('rotate');
}

function thayNoiDung(event,url, noi_dung_video_moi){
   event.preventDefault();
   let contro = window.scrollY; // Lưu vị trí hiện tại
  document.getElementById("iframevd").src = url
  document.getElementById("noi_dung_video").innerHTML = noi_dung_video_moi;
  window.scrollTo(0, contro); // Cuộn lại đúng chỗ
}