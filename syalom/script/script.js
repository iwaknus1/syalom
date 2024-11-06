// Bootstrap JS
const bootstrapScript = document.createElement('script');
bootstrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
bootstrapScript.integrity = "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz";
bootstrapScript.crossOrigin = "anonymous";
document.head.appendChild(bootstrapScript);


// Ionicons JS
const ioniconsModuleScript = document.createElement('script');
ioniconsModuleScript.type = "module";
ioniconsModuleScript.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js";
document.head.appendChild(ioniconsModuleScript);

const ioniconsNoModuleScript = document.createElement('script');
ioniconsNoModuleScript.noModule = true;
ioniconsNoModuleScript.src = "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js";
document.head.appendChild(ioniconsNoModuleScript);


//date time
document.addEventListener('DOMContentLoaded', (event) => {
    function updateDateTime() {
      const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        timeZone: 'Asia/Jakarta' 
      };
      const now = new Date().toLocaleDateString('id-ID', options);
      document.getElementById('current-datetime').textContent = now;
    }
  
    updateDateTime();
    setInterval(updateDateTime, 1000); // Update every second
  });


  document.getElementById("registration-form").addEventListener("submit", function(event){
    event.preventDefault();

    // Ambil semua input yang wajib diisi, kecuali 'Nama Wali'
    let requiredFields = document.querySelectorAll("input[type='text']:not([name='nama_wali'],[name='riwayat_kesehatan'],[name='alergi']), input[type='date'], input[type='file']");
    let radioGroups = document.querySelectorAll(".radio-group");
    let formIsValid = true;
    
    // Cek input teks dan file tidak kosong
    requiredFields.forEach(function(field) {
        if (field.value.trim() === "") {
            formIsValid = false;
            alert(field.previousElementSibling.innerText + " tidak boleh kosong");
            field.focus();
            return;
        }
    });

    // Cek input radio button
    radioGroups.forEach(function(group) {
        let radioChecked = group.querySelector("input[type='radio']:checked");
        if (!radioChecked) {
            formIsValid = false;
            alert(group.previousElementSibling.innerText + " tidak boleh kosong");
            group.focus();
            return;
        }
    });

    // Jika semua sudah diisi, kirim formulir
    if (formIsValid) {
        alert("Form submitted successfully!");
        // Di sini kamu bisa menambahkan logic untuk mengirim data, seperti form.submit();
    }
});
