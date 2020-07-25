var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');
var dataString = "Tiwi KRTMI managerial SBM,Marcello Faria Roket Sistem IF,Muhamad Rizki Nur Rahman (kinur) CImahi Telekomunikasi Umum Kontrol,Ahmad Miftaqudin Banyuwangi Fisika KRPAI Programming,Syamil Cholid Abdurrasyid Yogyakarta IF RISTEX,Steven Nataniel IF KRAI Kontrol,Enrico Zuriel Bekasi Fisika Teknik KRSTI Mekanik,M Ichsandro D Noor Jakarta STI KRSBI-B Managerial,Christian M P Napitulu Bengkulu Teknik Fisika KRAI Kontrol,Haryo Aji Pambagyo Jakarat Teknik Mesin KRSTI Mekanik,Joshua Lasro Hamonangan Purba Tapanuli Utara Pengelolaan Sumber Daya Air KRSBI-H Elektrik,Fachri Habibi Bandar Lampung Material Atmosfera Mekanik,Husnun Ni'am Pemalang Teknik Fisika KRTMI Elektrik,Muhammad Bintang Pananjung IF KRSBI-B Mekanik,Fatmasari Teknik Mesin Wonosobo KRPAI Mekanik,Akhyar Thoriq Alfatah Teknik Fisika Yogyakarta KRSBI-H Elektrik,Luthfiana Rahmawati Kimia Nganjuk KRSTI Manajerial,Ismail Al Faruqi Yogyakarta Geodesi Geomatika KRSTI Manajerial,Almeiza Arvin Muzaki Bandung Informatika KRSTI Elektrik,Adonis Thiafi Huga Mafaza Mesin KRSBI-B Mekanik,Matheus Haulgan Siallagan Power Bekasi Dago Atmosfera Mekanik,Irene Arbintha Bandung Pertambangan KRSBI-H Mekanik,Yudi Alfayat Informatika Payakumbuh KRSTI Programming,Rehagana Medan Informatika KRAI Kontrol,Karlsen Adiyasa Bachtiar Informatika Tanggerang Selatan KRPAI Mekanik,Ryandito Diandaru Surabaya RISTEX,Awwala Nisa Depok Informatika KRSTI Elektrik,Faris Jabar Nugrhadi Cimahi Elektro KRSBI-H Mekanik,Alam Raihan Emir Bandung Power Roket Sistem,Agung Kurniawan Fisika Sidoarjo KRSBI-B Mekanik,Owen Lim Pekanbaru Elektro KRSBI-B Elektrik,Abdul Ghani Harahap Tanggerang Mesin KRPAI Mekanik,Muhammad Khidlir Ali Magetan Concordia KRSTI Mekanik,Irina Mardhatillah Tanggerang Fisika KRSBI-B Elektrik,Sekar Dhamayanti Banyumas Kelautan KRSTI Programming,Anastasia Beatrice Cibubur STI KRSBI-H Manajerial,Maximilian Giovano Bekasi Dirgantara KRTMI Mekanik,Muhammad Jafar Gundari Bandung KRSBI-H Programming,Reynaldo Averril Samarinda Elektro KRPAI Programming,Christian Gunawan Jakarta Barat IF KRPAI Manajerial,Reyhan Mulqilatha Prajesa Banywangi Kimia KRSBI-B Programming,I Gusti Lanang Ari Trisne Sudana Elektro KRSBI-B Elektrik,Reyhan Emyr Arrosyid Jakarta Timur IF KRSBI-B Programming,Agape D'sky Tanggerang Selatan Elektro KRSBI-B Elektrik,Fakhri Nail Wibowo Jawa Timur Informatika KRPAI Programming,Naufal Zaidan Nabhan Bandung Telekomunikasi KRSBI-B Managerial,Jason Stanley Yoman Medan IF KRSBI-B Programming,Ryan Dwigiantara Jakarta Fisika KRTMI Mekanik,Indra Jaya Budiarso Tanggerang Material KRAI Manager,Sofia Maharani Ponorogo Bioloy Algiculture Dago AtmosferaMekanik,Shirley Tanjung Pinang Perminyakan KRSBI-B Mekanik,Aria Bachrul Ulum Berlian Bandung IF KRTMI Elektrik,Kevin Domenico Tantiyo Bekasi Biomedis KRAI Mekanik,Nur Mutmainnah Rahim Takalar Dago Atmosfera Elektrik,Ayodhya Karaniya Sikoko Pekanbaru Mesin KRAI Mekanik,Ahya Rahma Guswir Bukittinggi Elektro KRSTI Elektrik,Graciella Valeska Liander Dumai STI KRSBI-H Manajerial,Belinda Ambarsari Cirebon Mesin KRSBI-B Manajerial(Official),Nabilah Erfariani Padang IF KRSTI Elektrik,Sidharta Prastya LubukLInggau Elektro KRAI Kontrol,Kelvin Sutirta Jambi Elektro KRAI Kontrol,Zivanka Nafisa Wongkaren Jakarta Barat Mesin KRSBI-H Programming,Gamma Althafiandsyah Jakarta Selatan RISTEX Riset,Ariq Bagastya Risa Depok Mesin KRSBI-H Mekanik,Hafvid Fachrizza Cirebon Astronomi RISTEX Riset,Wifal Inola Siak Elektro KRSBI-B Elektrik,Michael Alfarino Bella Phungputra Yogyakarta Fisika Dago Atmosfera Sistem,Aditya Anandita Dharma Putra Padang Elektro KRSBI-H Elektrik,Achmad Farhan Masyhur Mesin Jakarta KRTMI Mekanik,Faris Hasim Bandung IF KRTMI Programming,Raisal Pradipta Wardana Solo Fisika RISTEX Riset,Panji Bhagaskara Dirgantara Surabaya KRTMI Manajerial,Syifa Kushirayati Depok Biomedis KRTMI Elektrik,Cynthia Rusadi Jakarta Utara IF KRTMI Manajerial,Daud Aditya Jakarta Barat Roket Manajerial,Farhan Naufal Aditya Jakarta Timur Mesin KRAI Mekanik,Valensius Nathanael Fisika Bandung RISTEX Riset,M Nabil Fadlurahman Matematika Surabaya RISTEX Riset,Theodore Maximilan Jonathan Tanggerang Elektro RISTEX Riset,Dinda Fahrila Suci Ramadhani Madiun Fisika KRSBI-B Manajerial,Kelvin Angga Yumawan Pekanbaru Elektro KRTMI Elektrik,Karina Imani Jakarta IF Dago Atmosfera Sistem,Muhammad Fariz Aulia Jakarta Metalurgi KRTMI Manajerial,Fernaldi Fauzie Pekanbaru STI KRPAI Elektrik,Bizza Shafwah Utsula Jakarta Fisika KRTMI Programming,Aldian Nur Azmar Bekasi Fisika KRTMI Elektrik,Avima Haamesha Magelang Fisika KRSTI Programming,Ilham Jang Jaya Putra Lebong Lingkungan KRTMI Programming,Daniel Mario Reynaldi IF Bogor Roket Telemetri,Richard Rivaldo Palembang IF KRPAI Programming,Chintya Wijaya STI Pekanbaru KRSBI-H Manajerial,I Made Adi Kurniawan Bali Mesin KRAI Mekanik,Azaria Haykal Ahmad Tulungagung Mesin KRPAI Mekanik,Muhammad Alif Darmamulia Bandung Matematika KRTMI Mekanik,Richard Jakarta Elektro KRPAI Elektrik,Dwi Ananda Sanbari Madura Elektro KRTMI Elektrik,Devica Winata Jambi Industri KRAI Manajerial,Zumar Jatsiyah Hadiid Hermawan Bandung Perminyakan KRTMI Programming,Bakuh Danang Setyo Budi Samarinda Astonomi KRPAI Elektrik,Muhammad Daffa Adhitama Malang Dirgantara Dago Atmosfera Mekanik,Adelia Yuliarni Bandung Elektro KRPAI Elektrik"
dataString = dataString.split(",")
// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);
dataString.forEach(data=>{
	addItem(data);
})
// Add item
function addItem(data){

  // Get input value
  var newItem = data;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
