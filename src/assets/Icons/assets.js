import home from "./home.png";
import layer from "./layers.png";
import magnifying from "./magnifying-glass.png";
import mic from "./mic.png";
import next from "./next.png";
import pause from "./pause.png";
import play from "./play.png";
import plus from "./plus.png";
import previous from "./previous.png";
import queue from "./queue.png";
import resize from "./resize.png";
import rightarrow from "./right-arrow.png";
import spotify from "./spotify.png";
import suffle from "./suffle.png";
import left from "./left.png";
import right from "./right.png";
import bell from "./bell.png";
import loop from "./loop.png";
import volume from "./volume.png";
import user from "./user.png";
import downloadarrow from "./download-arrow.png";
import clock from "./clock.png";

import aajPhir from "../Songs/aajPhir.mp3";
import ArijitSinghChhodDiya from "../Songs/ArijitSinghChhodDiya.mp3";
import ArijitSinghISHQMUBARAK from "../Songs/ArijitSinghISHQMUBARAK.mp3";
import ArijitSinghJoTumNaHo from "../Songs/ArijitSinghJoTumNaHo.mp3";
import ArijitSinghKhairiyatPuchho from "../Songs/ArijitSinghKhairiyatPuchho.mp3";
import ArijitSinghLambiyaanSiJudaiyaan from "../Songs/ArijitSinghLambiyaanSiJudaiyaan.mp3";
import ArijitSinghMashup2020 from "../Songs/ArijitSinghMashup2020.mp3";
import ArijitSinghMashup2021_DJ from "../Songs/ArijitSinghMashup2021_DJ.mp3";
import AtifAslamPehliDafaSong from "../Songs/AtifAslamPehliDafaSong.mp3";
import AtifAslamKadiTeHans from "../Songs/AtifAslamKadiTeHans.mp3";
import DilMeriNaSune from "../Songs/DilMeriNaSune.mp3";

import ajjphirtum from "../MoviePoster/ajjphir.jfif";
import chordiya from "../MoviePoster/chordiya.jfif";
import dilmeri from "../MoviePoster/dilmeri.jfif";
import hits from "../MoviePoster/hits.jfif";
import lambiyaan from "../MoviePoster/lambiyaan.jfif";
import lovemashup from "../MoviePoster/lovemashup.jfif";
import mashup2020 from "../MoviePoster/mashup2020.jfif";
import mashup2021 from "../MoviePoster/mashup2021.jfif";
import pehidafa from "../MoviePoster/pehidafa.jfif";
import shayad from "../MoviePoster/shayad.jfif";
import tulsiKumar from "../MoviePoster/tulsiKumar.png";
import atifOne from "../MoviePoster/atifOne.jfif";
import download from "../MoviePoster/download.jfif";

let assetIcon = {
  downloadarrow,
  user,
  volume,
  loop,
  home,
  layer,
  magnifying,
  mic,
  next,
  pause,
  play,
  plus,
  previous,
  queue,
  resize,
  rightarrow,
  spotify,
  suffle,
  left,
  right,
  bell,
  clock,
};

let albumData = [
  {
    id: 0,
    name: "Arjit Singh Mashup",
    image: lovemashup,
    description: "your weekly update of the most played tracks",
    bgColor: "#e67e22",
  },
  {
    id: 1,
    name: "Top 50 Global Tracks",
    image: mashup2020,
    description:
      "Top 50 global tracks your weekly update of the most played tracks",
    bgColor: "#192a56",
  },
  {
    id: 2,
    name: "Atif Aslam Hit's",
    image: atifOne,
    description: "Atif Aslam hit's in 2024 most popular tracks",
    bgColor: "#130f40",
  },
  {
    id: 3,
    name: "Mega Hits",
    image: mashup2021,
    description: "your weekly update of the most played tracks",
    bgColor: "#686de0",
  },
  {
    id: 4,
    name: "Remix & Mashup",
    image: hits,
    description: "your weekly update of the most played tracks",
    bgColor: "#535c68",
  },
];

let songData = [
  {
    id: 0,
    name: "Aaj Phir - Remix",
    image: ajjphirtum,
    file: aajPhir,
    description:
      "Aaj Phir - Remix _ Full Audio Song _ Hate Story 2 _ Arijit Singh _ Jay Bhanushali _ Surveen Chawla",
    duration: "4:12",
  },
  {
    id: 1,
    name: "Chhod Diya",
    image: chordiya,
    file: ArijitSinghChhodDiya,
    description:
      "Arijit Singh _ Chhod Diya _ Bazaar Movie _ Lyrical Full Song(MP3_160K)_1",
    duration: "5:16",
  },
  {
    id: 2,
    name: "Ishq Mubarak",
    image: shayad,
    file: ArijitSinghISHQMUBARAK,
    description: "Arijit Singh_ ISHQ MUBARAK Full Song WIth Lyrics _ Tum Bin 2",
    duration: "5:07",
  },
  {
    id: 3,
    name: "Jo Tum Na Ho",
    image: download,
    file: ArijitSinghJoTumNaHo,
    description:
      "Arijit Singh - Jo Tum Na Ho _ Full Song _ Love Aaj Kal _ Jo Tum Na Ho Toh Hum Nahi _ Trippy Music",
    duration: "3:01",
  },
  {
    id: 4,
    name: "Khairiyat Puchho",
    image: tulsiKumar,
    file: ArijitSinghKhairiyatPuchho,
    description:
      "Arijit Singh Khairiyat Puchho Full Song Lyrics Chhhichore Movie _ Arijit Singh Khairiyat Song Lyrics",
    duration: "4:40",
  },

  {
    id: 5,
    name: "Lambiyaan Si Judaiyaan",
    image: lambiyaan,
    file: ArijitSinghLambiyaanSiJudaiyaan,
    description:
      "Arijit Singh _ Lambiyaan Si Judaiyaan With Lyrics _ Raabta _ Sushant Rajput_ Kriti Sanon _ T-Series",
    duration: "4:18",
  },
  {
    id: 6,
    name: "Arijit Singh Mashup 2020",
    image: mashup2021,
    file: ArijitSinghMashup2020,
    description:
      "Arijit Singh Mashup 2020 _ Parth Dodiya _ Naresh Parmar _ Emotional Songs Mashup",
    duration: "5:44",
  },
  {
    id: 7,
    name: "Arijit Singh Mashup 2021",
    image: mashup2020,
    file: ArijitSinghMashup2021_DJ,
    description:
      "Arijit Singh Mashup 2021 _ DJ SKET _ Visual Galaxy _ Valentine Special _ Love Songs 2021",
    duration: "6:46",
  },
  {
    id: 8,
    name: "Kadi Te Hans",
    image: atifOne,
    file: AtifAslamKadiTeHans,
    description:
      "Atif Aslam _ Kadi Te Hans _ VELO Sound Station 2020(MP3_160K)",
    duration: "4:44",
  },
  {
    id: 9,
    name: "Dil Meri Na Sune",
    image: dilmeri,
    file: DilMeriNaSune,
    description: "Dil Meri Na Sune Genius",
    duration: "3:55",
  },
  {
    id: 10,
    name: "Atif Aslam_ Pehli Dafa",
    image: pehidafa,
    file: AtifAslamPehliDafaSong,
    description:
      "Atif Aslam_ Pehli Dafa Song Ileana D_Cruz _ Latest Hindi Song 2017 _ T-Series",
    duration: "4:42",
  },
];

export { assetIcon, albumData, songData };
