// Init
import {
  faUserNinja,
  faGraduationCap,
  faTrophy,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faAmazon,
  faCloudflare,
  faDeezer,
  faDropbox,
  faLine,
  faPaypal,
  faSpotify,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import fotoProyek1 from "./../../assets/1.png";
import fotoProyek2 from "./../../assets/2.png";
import fotoProyek3 from "./../../assets/3.png";
import fotoProyek4 from "./../../assets/4.png";
import fotoProyek5 from "./../../assets/5.png";
import fotoProyek6 from "./../../assets/6.png";

// Home
export const introduction = [
  {
    logo: faUserNinja,
    desc: "Nama saya I Dewa Gede Mahadi Saputra dan biasa dipanggil Dode Mahadi",
  },
  {
    logo: faGraduationCap,
    desc: "Seorang mahasiswa Dual Degree di ITB STIKOM Bali & HELP University Malaysia",
  },
  {
    logo: faCode,
    desc: "Mengerti HTML, CSS, JS, PHP, Web Deployment dan lainnya",
  },
  { logo: faTrophy, desc: "Pernah menjuarai beberapa perlombaan komputer" },
];

export const proyekSaya = [
  {
    thumbnail: fotoProyek2,
    name: "Penghitung Win Rate MLBB",
    desc: "Untuk menghitung berapa match yang dibutuhkan untuk mendapatkan Win Rate yang kamu inginkan",
    code: "HTML, CSS, Basic Javascript",
    link: "https://penghitung-wr-mlbb.vercel.app/",
  },
  {
    thumbnail: fotoProyek3,
    name: "Portofolio v1",
    desc: "Kamu sekarang sedang berada disini! Ini adalah website portofolio pertama saya. Tampilan terinspirasi dari website Harisenin.com 👋",
    code: "React JS, React Bootstrap, CSS, HTML, AOS",
    link: "https://v1.mahadisaputra.my.id/",
  },
  {
    thumbnail: fotoProyek4,
    name: "Portofolio v2",
    desc: "Website portofolio kedua saya, isinya sama dengan website ini namun hanya berbeda tampilan",
    code: "Next JS, Style Component CSS, HTML, AOS",
    link: "https://v2.mahadisaputra.my.id/",
  },
  {
    thumbnail: fotoProyek1,
    name: "TMDB Movie API",
    desc: "Untuk melihat deskripsi film populer, film yang sedang tayang di bioskop dan kalian juga bisa mencari deskripsi dari sebuah film",
    code: "TMDB API, CSS, HTML, Javascript, Bootstrap",
    link: "https://movie-api-by-tmdb.vercel.app/",
  },
  {
    thumbnail: fotoProyek5,
    name: "Laravel Blog",
    desc: "Ini adalah blog saya, dimana saya akan berbagi pengalaman dan sharing sedikit ilmu yang saya miliki. *Belum dipublish*",
    code: "Laravel, Tailwind",
    link: "https://blog.mahadisaputra.my.id/",
  },
  {
    thumbnail: fotoProyek6,
    name: "Portofolio v3",
    desc: "Ini adalah portofolio utama saya dan bisa diakses langsung di mahadisaputra.my.id",
    code: "React, Tailwind, daisyUI",
    link: "https://mahadisaputra.my.id/",
  },
];

// About page
export const educationHistory = [
  { name: "TK Mandung", year: "2006" },
  { name: "TK Star Kids", year: "2007" },
  { name: "SD Bintang Persada", year: "2007-2013" },
  { name: "SMP N 1 Tabanan", year: "2013-2016" },
  { name: "SMA N 1 Tabanan", year: "2016-2019" },
  { name: "ITB STIKOM Bali", year: "2019-sekarang" },
];

export const ability = [
  { name: "CSS", percentage: "85%" },
  { name: "HTML", percentage: "85%" },
  { name: "Ms. Office", percentage: "85%" },
  { name: "PHP", percentage: "75%" },
  { name: "React", percentage: "80%" },
  { name: "Web", percentage: "80%" },
];

export const award = [
  { name: "Juara 1 Lomba Komputer Tingkat SD se-Kabupaten Tabanan" },
  { name: "Juara 2 Logic Office (Log Off) Tingkat SMP se-Kabupaten Tabanan" },
];

export const experience = [
  { name: "Blogspot", year: "2011-2014" },
  { name: "WordPress", year: "2012-2013" },
  { name: "Web Developer", year: "2012-sekarang" },
  { name: "Twitter API", year: "2013-2015" },
  { name: "Admin FanBase Twitter", year: "2012-2013" },
  { name: "Penjual Pengikut Twitter", year: "2013-2015" },
];

// Client
export const myClient = [
  { name: faAmazon },
  { name: faCloudflare },
  { name: faDeezer },
  { name: faDropbox },
  { name: faLine },
  { name: faPaypal },
  { name: faSpotify },
  { name: faTiktok },
];
