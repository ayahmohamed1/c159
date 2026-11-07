export interface GiftData {
  senderName: string;
  receiverName: string;
  envelopeImage: string;
  cardMessage: string;
  birthdayImage: string;
  birthdayTitle: string;
  birthdayText: string;
  balloonImage: string;
  birthdayWishesTitle: string;
  birthdayWishesMessage: string;
  thingsWeWannaDo: string[];
  loveLetterTitle?: string;
  loveLetterSubtitle?: string;
  loveLetterParagraphs?: string[];
  musicCoverImage: string;
  musicUrl: string;
  songTitle: string;
  secondMusicCoverImage: string;
  secondMusicUrl: string;
  secondSongTitle: string;
}

const defaultThings: string[] = [
  "Que Dios nos permita ser el uno para el otro, convertirnos en esposos y compartir el resto de nuestras vidas juntos 💍",
  "Conocernos en persona y visitar juntos a toda su hermosa familia en Costa Rica ❤️",
  "Viajar juntos a los lugares que soñamos conocer, empezando por Brasil ✈️",
  "Bailar juntos; sería aún más bonito si lo hacemos bajo la lluvia 🌧️",
  "Ir juntos a las playas y disfrutar de esos momentos 🌊",
  "Sobre todo, encontrarnos, descubrir cada día más cosas que queremos hacer juntos, conocer mejor nuestros deseos y seguir descubriéndonos día tras día 🤍",
];

export const defaultLoveLetterParagraphs: string[] = [
  "Amo esos detalles tan especiales que tienes. Amo la manera en que tratas a tu familia, desde los más pequeños hasta los mayores.",
  "Adoro tu ternura y todos los sacrificios que haces por tu familia, por Sofia y Ángele. Me encanta la forma en que les hablas y también la manera en que ellos te hablan.",
  "Me ha encantado la forma en que me cuidas, me valoras y me apoyas en los momentos difíciles. Por eso siempre intento estar a tu lado, en cualquier momento, y brindarte todo mi apoyo.",
  "Cuando haces esas cosas por mí, me das una tranquilidad enorme en el corazón y me haces sonreír.",
  "También adoro cuando cantas mientras estamos en llamada. El día que te escuché cantar, se me derritió el corazón. Ha sido una de las cosas más bonitas que he escuchado en mi vida.",
  "Y podría seguir diciéndote muchísimas más cosas que amo de ti, porque todavía tengo mucho más que decirte.",
];

const ahmedGift: GiftData = {
  senderName: "ISMAIL",
  receiverName: "Sofía",
  envelopeImage: "/images/envelope-placeholder.png",
  cardMessage: "Feliz cumpleaños, mi amor! Mi Sofía ❤️🎂",
  birthdayImage: "/images/kid-placeholder.jpg",
  birthdayTitle: "Para usted, mi princesa ❤️",
  birthdayText:
    "Sabe Mi Amor Todavía recuerdo la primera vez que escuché su voz y vi una foto suya. No puedo describir lo que sentí en aquel momento. Y cada vez que escucho su voz o veo una foto suya, vuelvo a sentir esa misma emoción, como si fuera la primera vez. ❤️",
  balloonImage: "/images/cat.png",
  birthdayWishesTitle: "Feliz cumpleaños, mi amor! Mi Sofía ❤️🎂",
  birthdayWishesMessage:
    "Quiero desearle toda la felicidad del mundo, mucha salud, paz y amor. Quiero que este nuevo año de vida esté lleno de cosas bonitas y sueños cumplidos.\n\nQuiero que sepa que amo cada detalle de usted y todo lo que tiene que ver con su vida, incluida su hermosa familia baltan. Quiero que algún día haya un lugar para mí entre ustedes y que podamos compartir momentos bonitos juntos.\n\nQuiero que este cumpleaños sea el comienzo de una nueva etapa, en la que trabajemos por todo lo que usted desea y por todo lo que nosotros queremos construir juntos. Aunque todavía no conozca exactamente todo lo que usted quiere, quiero conocer sus sueños, apoyarla y acompañarla para hacerlos realidad.\n\nQuiero estar con usted en este día tan especial, y deseo que se reúnan todas las razones y cosas que la hacen feliz, y que su día esté lleno de alegría, amor y momentos bonitos.\n\nUsted merece todo lo bonito de este mundo Te amo muchísimo, Sofía baltan mi princesa, eres mi vida! ❤️",
  thingsWeWannaDo: defaultThings,
  loveLetterTitle: "Todo lo que amo de usted",
  loveLetterSubtitle: "Para mi Sofía, con todo mi amor ❤️",
  loveLetterParagraphs: defaultLoveLetterParagraphs,
  musicCoverImage: "/images/song-cover.jpg",
  musicUrl: "/music/our-song.mp3",
  songTitle: "Nuestra canción especial",
  secondMusicCoverImage: "/images/song-coverr.jpg",
  secondMusicUrl: "/music/song2.mp3",
  secondSongTitle: "Nuestra segunda canción",
};

const giftData: Record<string, GiftData> = {
  ahmed: ahmedGift,
  amir: ahmedGift,
  aya: {
    ...ahmedGift,
    senderName: "Aya",
    cardMessage: "¡Preparé estas sorpresas para usted con todo mi cariño!",
  },
};

export default giftData;