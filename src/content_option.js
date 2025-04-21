import { FaInstagram } from "react-icons/fa";

const logotext = "Selamat Datang di Website Portofolio Revellino Yoel";

const meta = {
  title: "Revellino Yoel",
  description:
    "saya mahasiswa ITENAS jurusan INFORMATIKA",
};

const introdata = {
  title: "Revellino Yoel",
  animated: {
    first: "152019139",
    second: "ITENAS",
    third: "INFORMATIKA",
  },
  description:
    "Saya adalah mahasiswa dari INSTITUT TEKNOLOGI NASIONAL BANDUNG jurusan INFORMATIKA",
    your_img_url: "/Revellino_Yoel.jpeg",
};

const dataabout = {
};

const education = [
  {
    school: "Institut Teknologi Nasional Bandung",
    year: "2020 - Sekarang",
    logo: "/image/itenas.jpg",
    link: "#",
  },
  {
    school: "SMA NEGERI 1 KOTA GUNUNG SITOLI",
    year: "2016 - 2019",
    logo: "/image/smansa.png",
    link: "#",
  },
  {
    school: "SMP SWASTA BUNGA MAWAR",
    year: "2013 - 2016",
    logo: "/image/smpbm.jpeg",
    link: "#",
  },
  {
    school: "SD SLAMET RIYADI",
    year: "2006 - 2013",
    logo: "/image/sd.png",
    link: "#",
  }, 

];

const worktimeline = [
  
];

const skills = [
  {
    name: "Javascript",
    value: 50,
    icon: "/image/js.png", // ganti dengan path gambar yang sesuai
  },
  {
    name: "MySQL",
    value: 50,
    icon: "image/sql.png",
  },
  {
    name: "PHP",
    value: 50,
    icon: "image/php.png",
  },
  {
    name: "UI/UX Design",
    value: 50,
    icon: "image/ui.png",
  },
];

export const tools = [
  { name: "VS Code", value: 50, icon: "/image/vs.png" },
  { name: "Xampp", value: 50, icon: "/image/xa.png" },
  { name: "Figma", value: 50, icon: "/image/f.png" },
  // ...
];

export const framework = [
  { name: "Laravel", value: 50, icon: "/image/la.png" },
  { name: "Bootstrap", value: 50, icon: "/image/bo.png" },
  // ...
];



const services = [
  
];

const dataportfolio = [
  {
      // "title": "Penyerahan Buku Tugas Akhir",
      "description": "Membuat Website Penyerahan Tugas Akhir.",
      "duration": "Juli 2024 - September 2024",
      "tech": ["HTML, Bootstrap, CSS, JavaScript, PHP, DataBase"],
      "img": "/image/LOGO PERPUS.png",
      "link": "" 
  }
  // },
  // {
  //   title: "Project Kedua",
  //   duration: "Apr 2023 - Jun 2023",
  //   description: "The wisdom of life consists in the elimination of non-essentials.",
  //   tech: ["HTML", "CSS", "JavaScript"],
  //   img: "https://picsum.photos/400/800/?grayscale",
  //   link: "#"
  // },
  // {
  //   title: "Project Ketiga",
  //   duration: "Jul 2023 - Sep 2023",
  //   description: "The wisdom of life consists in the elimination of non-essentials.",
  //   tech: ["Vue", "Tailwind", "Node.js"],
  //   img: "https://picsum.photos/400/700/?grayscale",
  //   link: "#"
  // }
];


const contactConfig = {
  YOUR_EMAIL: "revellinoyoel01@gmail.com",
  YOUR_FONE: "082321879255",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra.",
  // Buat akun di emailjs.com
  // Cek tutorial: https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_id",
  YOUR_TEMPLATE_ID: "template_id",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  instagram : "https://www.instagram.com/revellinoyoel01?igsh=MTN2b3FreDJtamo5ZQ=="
};

export {
  meta,
  dataabout,
  education,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
