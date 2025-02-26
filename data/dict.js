class dict {
  get none() {
    return { id: -1, hebrew: "", english: "" };
  }

  /************************************************************************************************************/

  get grammar() {
    return {
      types: {
        noun: { id: 0, hebrew: "שם עצם", english: "noun" },
        verb: { id: 1, hebrew: "פועל", english: "verb" },
        adjective: { id: 2, hebrew: "שם תואר", english: "adjective" },
        adverb: { id: 3, hebrew: "תואר הפועל", english: "adverb" },
        gerund: { id: 4, hebrew: "שם פעולה", english: "gerund" },
        pronoun: { id: 5, hebrew: "כינוי", english: "pronoun" },
        conjunction: { id: 6, hebrew: "מילת קישור", english: "conjunction" },
        adposition: { id: 7, hebrew: "מילת יחס", english: "adposition" },
        number: { id: 8, hebrew: "מספר", english: "number" },
      },
      numbers: {
        singular: { id: 0, hebrew: "יחיד", english: "singular" },
        dual: { id: 1, hebrew: "זוג", english: "dual" },
        trial: { id: 2, hebrew: "שלישיה", english: "trial" },
        quadral: { id: 3, hebrew: "רביעיה", english: "quadral" },
        quintal: { id: 4, hebrew: "חמישיה", english: "quintal" },
        sextal: { id: 5, hebrew: "שישיה", english: "sextal" },
        septal: { id: 6, hebrew: "שביעיה", english: "septal" },
        octal: { id: 7, hebrew: "שמיניה", english: "octal" },
        nonal: { id: 8, hebrew: "תשיעיה", english: "nonal" },
        decal: { id: 9, hebrew: "עשיריה", english: "decal" },
        paucal: { id: 10, hebrew: "כמה", english: "paucal" },
        plural: { id: 11, hebrew: "רבים", english: "plural" },
      },
      persons: {
        first: { id: 0, hebrew: "ראשון", english: "first" },
        second: { id: 1, hebrew: "שני", english: "second" },
        third: { id: 2, hebrew: "שלישי", english: "third" },
        secondThird: { id: 3, hebrew: "שני, שלישי", english: "second, third" },
      },
      times: {
        past: { id: 0, hebrew: "עבר", english: "past" },
        present: { id: 1, hebrew: "הווה", english: "present" },
        future: { id: 2, hebrew: "עתיד", english: "future" },
        imperative: { id: 3, hebrew: "ציווי", english: "imperative" },
      },
      genders: {
        male: { id: 0, hebrew: "זכר", english: "male" },
        female: { id: 1, hebrew: "נקבה", english: "female" },
      },
    };
  }

  /************************************************************************************************************/

  get data() {
    return [
      {
        id: 0,
        lishanDidan: "אנא",
        romanization: "a-ná",
        hebrew: ["אני"],
        english: ["I"],
        voice: [
          {
            path: "/margalit/0.mp3",
            actor: "מרגלית סאייר",
          },
        ],
        base: 12,
        type: this.grammar.types.pronoun,
        number: this.grammar.numbers.singular,
        person: this.grammar.persons.first,
        time: this.none,
        gender: this.none,
      },
      {
        id: 1,
        lishanDidan: "הדיקא",
        romanization: "hadi-qá",
        hebrew: ["גינה"],
        english: ["garden"],
        voice: [
          {
            path: "/margalit/1.mp3",
            actor: "מרגלית סאייר",
          },
        ],
        base: 1,
        type: this.grammar.types.noun,
        number: this.grammar.numbers.singular,
        person: this.none,
        time: this.none,
        gender: this.none,
      },
      {
        id: 2,
        lishanDidan: "גוצ'נא",
        romanization: "guča-ná",
        hebrew: ["מקל הליכה"],
        english: ["walking stick"],
        voice: [
          {
            path: "/margalit/2.mp3",
            actor: "מרגלית סאייר",
          },
        ],
        base: 2,
        type: this.grammar.types.noun,
        number: this.grammar.numbers.singular,
        person: this.none,
        time: this.none,
        gender: this.none,
      },
      {
        id: 3,
        lishanDidan: "כפורה",
        romanization: "kapo-ré",
        hebrew: ["איום", "נורא"],
        english: ["terrible", "frightful"],
        voice: [
          {
            path: "/margalit/3.mp3",
            actor: "מרגלית סאייר",
          },
        ],
        base: 3,
        type: this.grammar.types.adjective,
        number: this.none,
        person: this.none,
        time: this.none,
        gender: this.none,
      },
      {
        id: 4,
        lishanDidan: "תנורא",
        romanization: "tanu-rá",
        hebrew: ["חצאית"],
        english: ["skirt"],
        voice: [
          {
            path: "/margalit/4.mp3",
            actor: "מרגלית סאייר",
          },
        ],
        base: 4,
        type: this.grammar.types.noun,
        number: this.grammar.numbers.singular,
        person: this.none,
        time: this.none,
        gender: this.none,
      },
      {
        id: 5,
        lishanDidan: "זבון",
        romanization: "zbun",
        hebrew: ["חלוק"],
        english: ["robe"],
        voice: [
          {
            path: "/margalit/5.mp3",
            actor: "מרגלית סאייר",
          },
        ],
        base: 5,
        type: this.grammar.types.noun,
        number: this.grammar.numbers.singular,
        person: this.none,
        time: this.none,
        gender: this.none,
      },
      {
        id: 6,
        lishanDidan: "דאלן",
        romanization: "da-lán",
        hebrew: ["שכונה", "איזור", "כיוון"],
        english: ["neighborhood", "area", "direction"],
        voice: [
          {
            path: "/margalit/6.mp3",
            actor: "מרגלית סאייר",
          },
        ],
        base: 6,
        type: this.grammar.types.noun,
        number: this.grammar.numbers.singular,
        person: this.none,
        time: this.none,
        gender: this.none,
      },
      {
        id: 7,
        lishanDidan: "מעג'ון",
        romanization: "maajún",
        hebrew: ["רסק עגבניות"],
        english: ["tomato paste"],
        voice: [
          {
            path: "/margalit/7.mp3",
            actor: "מרגלית סאייר",
          },
        ],
        base: 7,
        type: this.grammar.types.noun,
        number: this.grammar.numbers.singular,
        person: this.none,
        time: this.none,
        gender: this.none,
      },
      {
        id: 8,
        lishanDidan: "ילופלה",
        romanization: "yalóple",
        hebrew: ["לומד"],
        english: ["learns", "learning"],
        voice: [
          {
            path: "/margalit/8.mp3",
            actor: "מרגלית סאייר",
          },
        ],
        base: 11,
        type: this.grammar.types.verb,
        number: this.grammar.numbers.singular,
        person: this.grammar.persons.second,
        time: this.grammar.times.present,
        gender: this.grammar.genders.male,
      },
      {
        id: 9,
        lishanDidan: "אהלא",
        romanization: "ahəlá",
        hebrew: ["משפחה"],
        english: ["family"],
        voice: [
          {
            path: "/margalit/9.mp3",
            actor: "מרגלית סאייר",
          },
        ],
        base: 9,
        type: this.grammar.types.noun,
        number: this.grammar.numbers.singular,
        person: this.none,
        time: this.none,
        gender: this.none,
      },
      {
        id: 10,
        lishanDidan: "רופא",
        romanization: "ru-pá",
        hebrew: ["גדול"],
        english: ["big"],
        voice: [
          {
            path: "/margalit/10.mp3",
            actor: "מרגלית סאייר",
          },
        ],
        base: 10,
        type: this.grammar.types.adjective,
        number: this.grammar.numbers.singular,
        person: this.none,
        time: this.none,
        gender: this.none,
      },
      {
        id: 11,
        lishanDidan: "ילפלה",
        romanization: "yələ́ple",
        hebrew: ["למד"],
        english: ["learned"],
        voice: [
          {
            path: "/margalit/11.mp3",
            actor: "מרגלית סאייר",
          },
        ],
        base: 11,
        type: this.grammar.types.verb,
        number: this.grammar.numbers.singular,
        person: this.grammar.persons.second,
        time: this.grammar.times.past,
        gender: this.grammar.genders.male,
      },
      {
        id: 12,
        lishanDidan: "או",
        romanization: "o",
        hebrew: ["הוא", "היא"],
        english: ["he", "she"],
        voice: [
          {
            path: "/aviv/12.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 12,
        type: this.grammar.types.pronoun,
        number: this.grammar.numbers.singular,
        person: this.grammar.persons.third,
        time: this.none,
        gender: this.none,
      },
      {
        id: 13,
        lishanDidan: "בינא",
        romanization: "be-ná",
        hebrew: ["מצח"],
        english: ["forehead"],
        voice: [
          {
            path: "/aviv/13.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 13,
        type: this.grammar.types.noun,
        number: this.grammar.numbers.singular,
        person: this.none,
        time: this.none,
        gender: this.none,
      },
      {
        id: 14,
        lishanDidan: "אכנן",
        romanization: "axnán",
        hebrew: ["אנחנו"],
        english: ["we"],
        voice: [
          {
            path: "/aviv/14.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 12,
        type: this.grammar.types.pronoun,
        number: this.grammar.numbers.plural,
        person: this.grammar.persons.first,
        time: this.none,
        gender: this.none,
      },
      {
        id: 15,
        lishanDidan: "אכני",
        romanization: "axní",
        hebrew: ["אנו"],
        english: ["we"],
        voice: [
          {
            path: "/aviv/15.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 12,
        type: this.grammar.types.pronoun,
        number: this.grammar.numbers.plural,
        person: this.grammar.persons.first,
        time: this.none,
        gender: this.none,
      },
      {
        id: 16,
        lishanDidan: "גל",
        romanization: "gal",
        hebrew: ["בייחד עם"],
        english: ["with"],
        voice: [
          {
            path: "/aviv/16.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 16,
        type: this.grammar.types.adverb,
        number: this.none,
        person: this.none,
        time: this.none,
        gender: this.none,
      },
      {
        id: 17,
        lishanDidan: "גלי",
        romanization: "gáli",
        hebrew: ["בייחד איתי"],
        english: ["with me"],
        voice: [
          {
            path: "/aviv/17.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 16,
        type: this.grammar.types.adverb,
        number: this.grammar.numbers.singular,
        person: this.grammar.persons.first,
        time: this.none,
        gender: this.none,
      },
      {
        id: 18,
        lishanDidan: "גלן",
        romanization: "gálan",
        hebrew: ["בייחד איתנו"],
        english: ["with us"],
        voice: [
          {
            path: "/aviv/18.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 16,
        type: this.grammar.types.adverb,
        number: this.grammar.numbers.plural,
        person: this.grammar.persons.first,
        time: this.none,
        gender: this.none,
      },
      {
        id: 19,
        lishanDidan: "גלוך",
        romanization: "gálox",
        hebrew: ["בייחד איתך"],
        english: ["with you"],
        voice: [
          {
            path: "/aviv/19.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 16,
        type: this.grammar.types.adverb,
        number: this.grammar.numbers.singular,
        person: this.grammar.persons.second,
        time: this.none,
        gender: this.grammar.genders.male,
      },
      {
        id: 20,
        lishanDidan: "גלכון",
        romanization: "gálxun",
        hebrew: ["בייחד איתכם", "בייחד איתכן", "בייחד איתן", "בייחד איתם"],
        english: ["with you", "with them"],
        voice: [
          {
            path: "/aviv/20.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 16,
        type: this.grammar.types.adverb,
        number: this.grammar.numbers.plural,
        person: this.grammar.persons.secondThird,
        time: this.none,
        gender: this.none,
      },
      {
        id: 21,
        lishanDidan: "גלך",
        romanization: "gálax",
        hebrew: ["בייחד איתך"],
        english: ["with you"],
        voice: [
          {
            path: "/aviv/21.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 16,
        type: this.grammar.types.adverb,
        number: this.grammar.numbers.singular,
        person: this.grammar.persons.second,
        time: this.none,
        gender: this.grammar.genders.female,
      },
      {
        id: 22,
        lishanDidan: "גליו",
        romanization: "gálew",
        hebrew: ["בייחד איתו"],
        english: ["with him"],
        voice: [
          {
            path: "/aviv/22.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 16,
        type: this.grammar.types.adverb,
        number: this.grammar.numbers.singular,
        person: this.grammar.persons.third,
        time: this.none,
        gender: this.grammar.genders.male,
      },
      {
        id: 23,
        lishanDidan: "גלאו",
        romanization: "gálaw",
        hebrew: ["בייחד איתה"],
        english: ["with her"],
        voice: [
          {
            path: "/aviv/23.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 16,
        type: this.grammar.types.adverb,
        number: this.grammar.numbers.singular,
        person: this.grammar.persons.third,
        time: this.none,
        gender: this.grammar.genders.female,
      },
      {
        id: 24,
        lishanDidan: "אהלה",
        romanization: "ahəlé",
        hebrew: ["משפחות"],
        english: ["families"],
        voice: [
          {
            path: "/aviv/24.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 9,
        type: this.grammar.types.noun,
        number: this.grammar.numbers.plural,
        person: this.none,
        time: this.none,
        gender: this.none,
      },
      {
        id: 25,
        lishanDidan: "רווא",
        romanization: "ru-wá",
        hebrew: ["גדול (גיל)"],
        english: ["big (age)"],
        voice: [
          {
            path: "/aviv/25.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 25,
        type: this.grammar.types.adjective,
        number: this.grammar.numbers.singular,
        person: this.none,
        time: this.none,
        gender: this.none,
      },
      {
        id: 26,
        lishanDidan: "בינה",
        romanization: "be-né",
        hebrew: ["מצחים"],
        english: ["foreheads"],
        voice: [
          {
            path: "/aviv/26.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 13,
        type: this.grammar.types.noun,
        number: this.grammar.numbers.plural,
        person: this.none,
        time: this.none,
        gender: this.none,
      },
      {
        id: 27,
        lishanDidan: "גוצ'נה",
        romanization: "guča-né",
        hebrew: ["מקלות הליכה"],
        english: ["walking sticks"],
        voice: [
          {
            path: "/aviv/27.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 2,
        type: this.grammar.types.noun,
        number: this.grammar.numbers.plural,
        person: this.none,
        time: this.none,
        gender: this.none,
      },
      {
        id: 28,
        lishanDidan: "הדיקה",
        romanization: "hadi-qé",
        hebrew: ["גינות"],
        english: ["gardens"],
        voice: [
          {
            path: "/aviv/28.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 1,
        type: this.grammar.types.noun,
        number: this.grammar.numbers.plural,
        person: this.none,
        time: this.none,
        gender: this.none,
      },
      {
        id: 29,
        lishanDidan: "זבונה",
        romanization: "zbuné",
        hebrew: ["חלוקים"],
        english: ["robes"],
        voice: [
          {
            path: "/aviv/29.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 5,
        type: this.grammar.types.noun,
        number: this.grammar.numbers.plural,
        person: this.none,
        time: this.none,
        gender: this.none,
      },
      {
        id: 30,
        lishanDidan: "מעג'ונה",
        romanization: "maajuné",
        hebrew: ["רסקי עגבניות"],
        english: ["tomato pastes"],
        voice: [
          {
            path: "/aviv/30.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 7,
        type: this.grammar.types.noun,
        number: this.grammar.numbers.plural,
        person: this.none,
        time: this.none,
        gender: this.none,
      },
      {
        id: 31,
        lishanDidan: "רווה",
        romanization: "ru-wé",
        hebrew: ["גדולים (גיל)"],
        english: ["big (age)"],
        voice: [
          {
            path: "/aviv/31.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 25,
        type: this.grammar.types.adjective,
        number: this.grammar.numbers.plural,
        person: this.none,
        time: this.none,
        gender: this.none,
      },
      {
        id: 32,
        lishanDidan: "רופה",
        romanization: "ru-pé",
        hebrew: ["גדולים"],
        english: ["big"],
        voice: [
          {
            path: "/aviv/32.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 10,
        type: this.grammar.types.adjective,
        number: this.grammar.numbers.plural,
        person: this.none,
        time: this.none,
        gender: this.none,
      },
      {
        id: 33,
        lishanDidan: "תנורה",
        romanization: "tanu-ré",
        hebrew: ["חצאיות"],
        english: ["skirts"],
        voice: [
          {
            path: "/aviv/33.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 4,
        type: this.grammar.types.noun,
        number: this.grammar.numbers.plural,
        person: this.none,
        time: this.none,
        gender: this.none,
      },
      {
        id: 34,
        lishanDidan: "את",
        romanization: "at",
        hebrew: ["את", "אתה"],
        english: ["you"],
        voice: [
          {
            path: "/aviv/34.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 12,
        type: this.grammar.types.pronoun,
        number: this.grammar.numbers.singular,
        person: this.grammar.persons.second,
        time: this.none,
        gender: this.none,
      },
      {
        id: 35,
        lishanDidan: "אתכון",
        romanization: "atxún",
        hebrew: ["אתן", "אתם"],
        english: ["you"],
        voice: [
          {
            path: "/aviv/35.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 12,
        type: this.grammar.types.pronoun,
        number: this.grammar.numbers.plural,
        person: this.grammar.persons.second,
        time: this.none,
        gender: this.none,
      },
      {
        id: 36,
        lishanDidan: "אוינה",
        romanization: "oyné",
        hebrew: ["הן", "הם"],
        english: ["they"],
        voice: [
          {
            path: "/aviv/36.mp3",
            actor: "אביב סאייר",
          },
        ],
        base: 12,
        type: this.grammar.types.pronoun,
        number: this.grammar.numbers.plural,
        person: this.grammar.persons.third,
        time: this.none,
        gender: this.none,
      },
    ];
  }
}

export const { none, grammar, data } = new dict();

/**
  {
    id: -1,
    lishanDidan: "",
    romanization: "áéíóúə́ščə",
    hebrew: [],
    english: [],
    voice: [
      {
        path: "//.mp3",
        actor: "",
      },
    ],
    base: -1,
    type: this.none,
    number: this.none,
    person: this.none,
    time: this.none,
    gender: this.none,
  },
 */
