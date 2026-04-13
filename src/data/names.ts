export type Gender = "boy" | "girl" | "neutral";

export type Origin =
  | "Yoruba" | "Igbo" | "Zulu" | "Akan" | "Swahili" | "Amharic"
  | "Hindi" | "Tamil" | "Sanskrit" | "Bengali" | "Urdu"
  | "Japanese" | "Chinese" | "Korean"
  | "Arabic" | "Persian" | "Hebrew" | "Turkish"
  | "Irish" | "Italian" | "Greek" | "Norse" | "Slavic" | "French" | "Spanish" | "German" | "Welsh" | "Scottish"
  | "Maori" | "Hawaiian" | "Native American"
  | "English" | "Latin";

export type Theme =
  | "Nature" | "Strength" | "Light" | "Peace" | "Wisdom"
  | "Love" | "Joy" | "Faith" | "Royalty" | "Courage"
  | "Beauty" | "Hope" | "Grace" | "Earth" | "Water"
  | "Fire" | "Sky" | "Stars" | "Music" | "Literary";

export interface BabyName {
  id: string;
  name: string;
  gender: Gender;
  origin: Origin;
  meaning: string;
  pronunciation: string;
  culturalContext: string;
  themes: Theme[];
  syllables: number;
  startingLetter: string;
}

export const ORIGINS: Origin[] = [
  "Yoruba","Igbo","Zulu","Akan","Swahili","Amharic",
  "Hindi","Tamil","Sanskrit","Bengali","Urdu",
  "Japanese","Chinese","Korean",
  "Arabic","Persian","Hebrew","Turkish",
  "Irish","Italian","Greek","Norse","Slavic","French","Spanish","German","Welsh","Scottish",
  "Maori","Hawaiian","Native American",
  "English","Latin"
];

export const THEMES: Theme[] = [
  "Nature","Strength","Light","Peace","Wisdom",
  "Love","Joy","Faith","Royalty","Courage",
  "Beauty","Hope","Grace","Earth","Water",
  "Fire","Sky","Stars","Music","Literary"
];

export const names: BabyName[] = [
  // ===== YORUBA =====
  { id: "1", name: "Adaeze", gender: "girl", origin: "Yoruba", meaning: "Daughter of the king", pronunciation: "ah-DAH-eh-zeh", culturalContext: "A royal Yoruba name reflecting the high esteem in which daughters are held in Nigerian culture.", themes: ["Royalty", "Grace"], syllables: 4, startingLetter: "A" },
  { id: "2", name: "Oluwaseun", gender: "boy", origin: "Yoruba", meaning: "God has done something worthy of thanks", pronunciation: "oh-LOO-wah-SHEH-oon", culturalContext: "Yoruba names often begin with 'Olu' referring to God, expressing gratitude for the child's birth.", themes: ["Faith", "Joy"], syllables: 4, startingLetter: "O" },
  { id: "3", name: "Ayodele", gender: "neutral", origin: "Yoruba", meaning: "Joy has come home", pronunciation: "ah-YOH-deh-leh", culturalContext: "Traditionally given to a child whose birth brings happiness to the family.", themes: ["Joy", "Hope"], syllables: 4, startingLetter: "A" },
  { id: "4", name: "Folasade", gender: "girl", origin: "Yoruba", meaning: "Honor bestows a crown", pronunciation: "foh-lah-SHAH-deh", culturalContext: "Reflects the Yoruba value of honor and dignity, suggesting the child will bring prestige.", themes: ["Royalty", "Grace", "Beauty"], syllables: 4, startingLetter: "F" },
  { id: "5", name: "Babatunde", gender: "boy", origin: "Yoruba", meaning: "Father has returned", pronunciation: "bah-bah-TOON-deh", culturalContext: "Given to a boy born shortly after a grandfather's passing, symbolizing reincarnation in Yoruba belief.", themes: ["Faith", "Wisdom"], syllables: 4, startingLetter: "B" },
  { id: "6", name: "Titilayo", gender: "girl", origin: "Yoruba", meaning: "Happiness is eternal", pronunciation: "tee-tee-LAH-yoh", culturalContext: "An aspirational name expressing the wish for a lifetime of joy.", themes: ["Joy", "Hope"], syllables: 4, startingLetter: "T" },
  { id: "7", name: "Adeola", gender: "neutral", origin: "Yoruba", meaning: "Crown of wealth", pronunciation: "ah-DEH-oh-lah", culturalContext: "Combines 'ade' (crown) and 'ola' (wealth), a name of high aspiration.", themes: ["Royalty", "Hope"], syllables: 4, startingLetter: "A" },
  { id: "8", name: "Temitope", gender: "neutral", origin: "Yoruba", meaning: "Mine is worthy of thanks", pronunciation: "TEH-mee-TOH-peh", culturalContext: "Expresses thankfulness and the belief that every child is a divine gift.", themes: ["Faith", "Joy", "Grace"], syllables: 4, startingLetter: "T" },

  // ===== IGBO =====
  { id: "9", name: "Chidera", gender: "neutral", origin: "Igbo", meaning: "God has written", pronunciation: "chee-DEH-rah", culturalContext: "An Igbo name reflecting belief in divine destiny and purpose.", themes: ["Faith", "Wisdom"], syllables: 3, startingLetter: "C" },
  { id: "10", name: "Nnamdi", gender: "boy", origin: "Igbo", meaning: "My father's land", pronunciation: "NAH-mdee", culturalContext: "Celebrates patrilineal heritage and connection to ancestral homeland.", themes: ["Earth", "Strength"], syllables: 2, startingLetter: "N" },
  { id: "11", name: "Adaora", gender: "girl", origin: "Igbo", meaning: "Daughter of the people", pronunciation: "ah-DAH-oh-rah", culturalContext: "Signifies a girl who belongs to and is cherished by the entire community.", themes: ["Love", "Grace"], syllables: 4, startingLetter: "A" },
  { id: "12", name: "Chukwuemeka", gender: "boy", origin: "Igbo", meaning: "God has done great things", pronunciation: "choo-kwoo-EH-meh-kah", culturalContext: "A profound Igbo name acknowledging divine greatness.", themes: ["Faith", "Strength"], syllables: 5, startingLetter: "C" },
  { id: "13", name: "Obiageli", gender: "girl", origin: "Igbo", meaning: "One who has come to enjoy", pronunciation: "oh-bee-AH-geh-lee", culturalContext: "Expresses the hope that the child will live a life of fulfillment.", themes: ["Joy", "Hope"], syllables: 5, startingLetter: "O" },

  // ===== ZULU =====
  { id: "14", name: "Nkosazana", gender: "girl", origin: "Zulu", meaning: "Princess", pronunciation: "n-koh-sah-ZAH-nah", culturalContext: "A Zulu royal title used as a name, reflecting dignity and nobility.", themes: ["Royalty", "Beauty"], syllables: 4, startingLetter: "N" },
  { id: "15", name: "Sizwe", gender: "boy", origin: "Zulu", meaning: "Nation", pronunciation: "SIZ-weh", culturalContext: "Represents the hope that the child will contribute to building the nation.", themes: ["Strength", "Courage"], syllables: 2, startingLetter: "S" },
  { id: "16", name: "Thandiwe", gender: "girl", origin: "Zulu", meaning: "Beloved", pronunciation: "tahn-DEE-weh", culturalContext: "One of the most popular Zulu names, made internationally known by actress Thandiwe Newton.", themes: ["Love", "Beauty"], syllables: 3, startingLetter: "T" },
  { id: "17", name: "Mandla", gender: "boy", origin: "Zulu", meaning: "Strength, power", pronunciation: "MAHN-dlah", culturalContext: "A name expressing the hope for inner strength and resilience.", themes: ["Strength", "Courage"], syllables: 2, startingLetter: "M" },

  // ===== AKAN =====
  { id: "18", name: "Akosua", gender: "girl", origin: "Akan", meaning: "Born on Sunday", pronunciation: "ah-KOH-soo-ah", culturalContext: "Akan day names connect children to the day of their birth, each carrying specific personality traits.", themes: ["Joy", "Light"], syllables: 4, startingLetter: "A" },
  { id: "19", name: "Kwame", gender: "boy", origin: "Akan", meaning: "Born on Saturday", pronunciation: "KWAH-meh", culturalContext: "Made famous by Kwame Nkrumah, Ghana's first president. Saturday-born children are believed to be calm and wise.", themes: ["Wisdom", "Peace"], syllables: 2, startingLetter: "K" },
  { id: "20", name: "Abena", gender: "girl", origin: "Akan", meaning: "Born on Tuesday", pronunciation: "ah-BEH-nah", culturalContext: "Tuesday-born girls are believed to have a compassionate and peaceful nature.", themes: ["Peace", "Grace"], syllables: 3, startingLetter: "A" },

  // ===== SWAHILI =====
  { id: "21", name: "Zuri", gender: "girl", origin: "Swahili", meaning: "Beautiful", pronunciation: "ZOO-ree", culturalContext: "A widely loved Swahili name that has become popular globally for its simplicity and meaning.", themes: ["Beauty", "Joy"], syllables: 2, startingLetter: "Z" },
  { id: "22", name: "Baraka", gender: "boy", origin: "Swahili", meaning: "Blessings", pronunciation: "bah-RAH-kah", culturalContext: "Derived from Arabic influence in East African Swahili culture, signifying divine favor.", themes: ["Faith", "Hope"], syllables: 3, startingLetter: "B" },
  { id: "23", name: "Amani", gender: "neutral", origin: "Swahili", meaning: "Peace", pronunciation: "ah-MAH-nee", culturalContext: "Reflects the importance of peace and harmony in East African societies.", themes: ["Peace", "Hope"], syllables: 3, startingLetter: "A" },
  { id: "24", name: "Imara", gender: "girl", origin: "Swahili", meaning: "Firm, strong", pronunciation: "ee-MAH-rah", culturalContext: "Given to express the hope for inner resilience and steadfastness.", themes: ["Strength", "Courage"], syllables: 3, startingLetter: "I" },

  // ===== AMHARIC =====
  { id: "25", name: "Selam", gender: "girl", origin: "Amharic", meaning: "Peace", pronunciation: "SEH-lahm", culturalContext: "A popular Ethiopian name that also serves as a common greeting.", themes: ["Peace", "Grace"], syllables: 2, startingLetter: "S" },
  { id: "26", name: "Dawit", gender: "boy", origin: "Amharic", meaning: "Beloved, David", pronunciation: "DAH-wit", culturalContext: "The Amharic form of David, deeply rooted in Ethiopian Orthodox Christian tradition.", themes: ["Love", "Faith"], syllables: 2, startingLetter: "D" },

  // ===== HINDI =====
  { id: "27", name: "Aarav", gender: "boy", origin: "Hindi", meaning: "Peaceful, calm", pronunciation: "AH-rahv", culturalContext: "One of the most popular modern Indian names, blending traditional Sanskrit roots with contemporary appeal.", themes: ["Peace", "Wisdom"], syllables: 2, startingLetter: "A" },
  { id: "28", name: "Ananya", gender: "girl", origin: "Hindi", meaning: "Unique, matchless", pronunciation: "ah-NAHN-yah", culturalContext: "A classical Sanskrit-origin name popular across India, celebrating individuality.", themes: ["Beauty", "Grace"], syllables: 3, startingLetter: "A" },
  { id: "29", name: "Vihaan", gender: "boy", origin: "Hindi", meaning: "Dawn, beginning of a new era", pronunciation: "vee-HAHN", culturalContext: "A trendy modern Hindi name symbolizing new beginnings and hope.", themes: ["Light", "Hope"], syllables: 2, startingLetter: "V" },
  { id: "30", name: "Kavya", gender: "girl", origin: "Hindi", meaning: "Poetry", pronunciation: "KAHV-yah", culturalContext: "Celebrates the rich tradition of poetry and literature in Indian culture.", themes: ["Literary", "Beauty", "Music"], syllables: 2, startingLetter: "K" },
  { id: "31", name: "Arjun", gender: "boy", origin: "Hindi", meaning: "Bright, shining, white", pronunciation: "AR-jun", culturalContext: "Named after the legendary archer hero of the Mahabharata epic.", themes: ["Courage", "Strength", "Light"], syllables: 2, startingLetter: "A" },
  { id: "32", name: "Diya", gender: "girl", origin: "Hindi", meaning: "Lamp, light", pronunciation: "DEE-yah", culturalContext: "Symbolizes the clay lamps lit during Diwali, the festival of lights.", themes: ["Light", "Hope", "Joy"], syllables: 2, startingLetter: "D" },
  { id: "33", name: "Reyansh", gender: "boy", origin: "Hindi", meaning: "Ray of light", pronunciation: "reh-YAHNSH", culturalContext: "A modern name derived from the sun's rays, increasingly popular in urban India.", themes: ["Light", "Hope"], syllables: 2, startingLetter: "R" },

  // ===== TAMIL =====
  { id: "34", name: "Tharani", gender: "girl", origin: "Tamil", meaning: "Earth", pronunciation: "TAH-rah-nee", culturalContext: "Celebrates the Tamil reverence for the earth and nature.", themes: ["Earth", "Nature"], syllables: 3, startingLetter: "T" },
  { id: "35", name: "Karthik", gender: "boy", origin: "Tamil", meaning: "One who bestows courage", pronunciation: "KAR-thik", culturalContext: "Named after Lord Murugan (also called Karthikeya), the Tamil deity of war and victory.", themes: ["Courage", "Strength"], syllables: 2, startingLetter: "K" },
  { id: "36", name: "Meera", gender: "girl", origin: "Tamil", meaning: "Ocean, boundary", pronunciation: "MEE-rah", culturalContext: "Also associated with the devotional poetess Meera Bai; popular across South India.", themes: ["Water", "Love", "Music"], syllables: 2, startingLetter: "M" },

  // ===== SANSKRIT =====
  { id: "37", name: "Aditya", gender: "boy", origin: "Sanskrit", meaning: "Sun, son of Aditi", pronunciation: "ah-DIT-yah", culturalContext: "One of the twelve solar deities in Vedic tradition; symbolizes brilliance.", themes: ["Light", "Fire", "Strength"], syllables: 4, startingLetter: "A" },
  { id: "38", name: "Saanvi", gender: "girl", origin: "Sanskrit", meaning: "Goddess Lakshmi, knowledge", pronunciation: "SAHN-vee", culturalContext: "Associated with prosperity and wisdom in Hindu tradition.", themes: ["Wisdom", "Grace", "Beauty"], syllables: 2, startingLetter: "S" },
  { id: "39", name: "Vivaan", gender: "boy", origin: "Sanskrit", meaning: "Full of life", pronunciation: "vih-VAHN", culturalContext: "A name celebrating vitality and the energy of new life.", themes: ["Joy", "Strength", "Light"], syllables: 2, startingLetter: "V" },
  { id: "40", name: "Ishani", gender: "girl", origin: "Sanskrit", meaning: "Ruler, goddess", pronunciation: "ee-SHAH-nee", culturalContext: "An epithet of Goddess Durga, representing feminine power.", themes: ["Strength", "Royalty", "Grace"], syllables: 3, startingLetter: "I" },

  // ===== BENGALI =====
  { id: "41", name: "Rian", gender: "boy", origin: "Bengali", meaning: "Little king", pronunciation: "REE-ahn", culturalContext: "A popular modern Bengali name with a regal undertone.", themes: ["Royalty"], syllables: 2, startingLetter: "R" },
  { id: "42", name: "Riya", gender: "girl", origin: "Bengali", meaning: "Singer, graceful", pronunciation: "REE-yah", culturalContext: "A melodic Bengali name celebrating artistic expression.", themes: ["Music", "Grace", "Beauty"], syllables: 2, startingLetter: "R" },

  // ===== JAPANESE =====
  { id: "43", name: "Haruki", gender: "boy", origin: "Japanese", meaning: "Shining brightly, spring child", pronunciation: "hah-ROO-kee", culturalContext: "Combines 'haru' (spring/sunlight) with 'ki' (radiance). Made famous by novelist Haruki Murakami.", themes: ["Light", "Nature", "Literary"], syllables: 3, startingLetter: "H" },
  { id: "44", name: "Sakura", gender: "girl", origin: "Japanese", meaning: "Cherry blossom", pronunciation: "SAH-koo-rah", culturalContext: "The cherry blossom is Japan's most iconic flower, symbolizing renewal and the fleeting beauty of life.", themes: ["Nature", "Beauty", "Hope"], syllables: 3, startingLetter: "S" },
  { id: "45", name: "Ren", gender: "neutral", origin: "Japanese", meaning: "Lotus, love", pronunciation: "REN", culturalContext: "A minimalist name popular for both genders, the lotus symbolizes purity rising from muddy waters.", themes: ["Nature", "Love", "Peace"], syllables: 1, startingLetter: "R" },
  { id: "46", name: "Hana", gender: "girl", origin: "Japanese", meaning: "Flower", pronunciation: "HAH-nah", culturalContext: "A simple and elegant name found across cultures; in Japanese, it evokes all flowers.", themes: ["Nature", "Beauty"], syllables: 2, startingLetter: "H" },
  { id: "47", name: "Kaito", gender: "boy", origin: "Japanese", meaning: "Ocean flying, soaring over the sea", pronunciation: "KAI-toh", culturalContext: "Combines 'kai' (sea) and 'to' (soar), evoking freedom and adventure.", themes: ["Water", "Sky", "Courage"], syllables: 2, startingLetter: "K" },
  { id: "48", name: "Yuki", gender: "neutral", origin: "Japanese", meaning: "Snow, happiness", pronunciation: "YOO-kee", culturalContext: "A dual-meaning name depending on kanji; popular for its gentle sound.", themes: ["Nature", "Joy", "Peace"], syllables: 2, startingLetter: "Y" },
  { id: "49", name: "Aiko", gender: "girl", origin: "Japanese", meaning: "Beloved child", pronunciation: "AH-ee-koh", culturalContext: "A classic Japanese name combining 'ai' (love) and 'ko' (child).", themes: ["Love", "Grace"], syllables: 3, startingLetter: "A" },
  { id: "50", name: "Sora", gender: "neutral", origin: "Japanese", meaning: "Sky", pronunciation: "SOH-rah", culturalContext: "Evokes the limitless expanse of the sky; used for all genders in modern Japan.", themes: ["Sky", "Nature", "Hope"], syllables: 2, startingLetter: "S" },

  // ===== CHINESE =====
  { id: "51", name: "Wei", gender: "boy", origin: "Chinese", meaning: "Greatness, power", pronunciation: "WAY", culturalContext: "One of the most common Chinese given names across dynasties, expressing aspiration.", themes: ["Strength", "Royalty"], syllables: 1, startingLetter: "W" },
  { id: "52", name: "Mei", gender: "girl", origin: "Chinese", meaning: "Beautiful, plum blossom", pronunciation: "MAY", culturalContext: "The plum blossom blooms in winter, symbolizing resilience and beauty in adversity.", themes: ["Beauty", "Nature", "Strength"], syllables: 1, startingLetter: "M" },
  { id: "53", name: "Liang", gender: "boy", origin: "Chinese", meaning: "Bright, good", pronunciation: "lee-AHNG", culturalContext: "A traditional name expressing virtue and clarity of character.", themes: ["Light", "Wisdom"], syllables: 2, startingLetter: "L" },
  { id: "54", name: "Xiu", gender: "girl", origin: "Chinese", meaning: "Elegant, beautiful", pronunciation: "SHOO", culturalContext: "Often used in compound names, conveying refinement and grace.", themes: ["Beauty", "Grace"], syllables: 1, startingLetter: "X" },
  { id: "55", name: "Jun", gender: "neutral", origin: "Chinese", meaning: "Truthful, talented", pronunciation: "JOON", culturalContext: "A unisex name representing the ideal of a morally upright person.", themes: ["Wisdom", "Grace"], syllables: 1, startingLetter: "J" },
  { id: "56", name: "Ling", gender: "girl", origin: "Chinese", meaning: "Spirit, soul, bell", pronunciation: "LING", culturalContext: "A poetic name evoking spiritual delicacy and the sound of bells.", themes: ["Music", "Grace", "Peace"], syllables: 1, startingLetter: "L" },

  // ===== KOREAN =====
  { id: "57", name: "Minjun", gender: "boy", origin: "Korean", meaning: "Quick, clever", pronunciation: "MIN-jun", culturalContext: "Consistently one of the most popular Korean boys' names, combining intelligence with quickness.", themes: ["Wisdom", "Strength"], syllables: 2, startingLetter: "M" },
  { id: "58", name: "Seo-yeon", gender: "girl", origin: "Korean", meaning: "Auspicious, beautiful", pronunciation: "SUH-yuhn", culturalContext: "The most popular girls' name in Korea for many years; evokes beauty and fortune.", themes: ["Beauty", "Hope"], syllables: 3, startingLetter: "S" },
  { id: "59", name: "Jiwon", gender: "neutral", origin: "Korean", meaning: "Wisdom, beauty, garden", pronunciation: "JEE-won", culturalContext: "A versatile unisex name whose meaning varies by the hanja characters chosen.", themes: ["Wisdom", "Nature", "Beauty"], syllables: 2, startingLetter: "J" },
  { id: "60", name: "Dohyun", gender: "boy", origin: "Korean", meaning: "Path of virtue", pronunciation: "DOH-hyun", culturalContext: "Reflects Confucian values of walking the righteous path.", themes: ["Wisdom", "Faith"], syllables: 2, startingLetter: "D" },

  // ===== ARABIC =====
  { id: "61", name: "Zahra", gender: "girl", origin: "Arabic", meaning: "Flower, shining, luminous", pronunciation: "ZAH-rah", culturalContext: "An epithet of Fatimah, daughter of Prophet Muhammad; one of the most beloved Arabic names.", themes: ["Beauty", "Light", "Nature"], syllables: 2, startingLetter: "Z" },
  { id: "62", name: "Omar", gender: "boy", origin: "Arabic", meaning: "Flourishing, long-lived", pronunciation: "OH-mar", culturalContext: "Honored after Omar ibn al-Khattab, the second Caliph of Islam, known for justice.", themes: ["Strength", "Wisdom"], syllables: 2, startingLetter: "O" },
  { id: "63", name: "Layla", gender: "girl", origin: "Arabic", meaning: "Night, dark beauty", pronunciation: "LAY-lah", culturalContext: "Central figure in the classic love story 'Layla and Majnun,' one of the greatest Arabic literary works.", themes: ["Beauty", "Love", "Literary", "Stars"], syllables: 2, startingLetter: "L" },
  { id: "64", name: "Idris", gender: "boy", origin: "Arabic", meaning: "Studious, interpreter", pronunciation: "ID-ris", culturalContext: "A prophet in Islamic tradition, associated with wisdom and learning.", themes: ["Wisdom", "Faith"], syllables: 2, startingLetter: "I" },
  { id: "65", name: "Amira", gender: "girl", origin: "Arabic", meaning: "Princess, leader", pronunciation: "ah-MEE-rah", culturalContext: "The feminine form of Amir; signifies nobility and leadership.", themes: ["Royalty", "Strength", "Grace"], syllables: 3, startingLetter: "A" },
  { id: "66", name: "Khalil", gender: "boy", origin: "Arabic", meaning: "Friend, companion", pronunciation: "kah-LEEL", culturalContext: "A Quranic name; also famous through poet Khalil Gibran.", themes: ["Love", "Wisdom", "Literary"], syllables: 2, startingLetter: "K" },
  { id: "67", name: "Noor", gender: "neutral", origin: "Arabic", meaning: "Light, radiance", pronunciation: "NOOR", culturalContext: "Used for all genders; 'An-Nur' (The Light) is one of the names of God in Islam.", themes: ["Light", "Faith", "Hope"], syllables: 1, startingLetter: "N" },
  { id: "68", name: "Yasmin", gender: "girl", origin: "Arabic", meaning: "Jasmine flower", pronunciation: "yahs-MEEN", culturalContext: "The jasmine flower is a symbol of grace and elegance throughout the Arab world.", themes: ["Nature", "Beauty", "Grace"], syllables: 2, startingLetter: "Y" },

  // ===== PERSIAN =====
  { id: "69", name: "Cyrus", gender: "boy", origin: "Persian", meaning: "Sun, throne", pronunciation: "SY-rus", culturalContext: "Named after Cyrus the Great, founder of the Persian Empire and author of the first human rights charter.", themes: ["Royalty", "Light", "Strength"], syllables: 2, startingLetter: "C" },
  { id: "70", name: "Darya", gender: "girl", origin: "Persian", meaning: "Sea, ocean", pronunciation: "DAR-yah", culturalContext: "Evokes the vastness and depth of the sea in Persian poetic tradition.", themes: ["Water", "Nature", "Beauty"], syllables: 2, startingLetter: "D" },
  { id: "71", name: "Arash", gender: "boy", origin: "Persian", meaning: "Hero, bright", pronunciation: "ah-RAHSH", culturalContext: "A legendary archer in the Shahnameh, Iran's national epic.", themes: ["Courage", "Strength", "Literary"], syllables: 2, startingLetter: "A" },
  { id: "72", name: "Parisa", gender: "girl", origin: "Persian", meaning: "Like a fairy", pronunciation: "pah-REE-sah", culturalContext: "Combines 'pari' (fairy) with '-sa' (like), celebrating ethereal beauty.", themes: ["Beauty", "Grace"], syllables: 3, startingLetter: "P" },
  { id: "73", name: "Rumi", gender: "neutral", origin: "Persian", meaning: "From Rome, beauty", pronunciation: "ROO-mee", culturalContext: "Made globally famous by the 13th-century Sufi poet Jalal ad-Din Rumi.", themes: ["Literary", "Wisdom", "Love", "Peace"], syllables: 2, startingLetter: "R" },

  // ===== HEBREW =====
  { id: "74", name: "Eliana", gender: "girl", origin: "Hebrew", meaning: "My God has answered", pronunciation: "eh-lee-AH-nah", culturalContext: "A name of deep faith, expressing gratitude for answered prayers.", themes: ["Faith", "Hope", "Grace"], syllables: 4, startingLetter: "E" },
  { id: "75", name: "Asher", gender: "boy", origin: "Hebrew", meaning: "Happy, blessed", pronunciation: "ASH-er", culturalContext: "One of the twelve sons of Jacob; the name promises a life of happiness.", themes: ["Joy", "Faith", "Hope"], syllables: 2, startingLetter: "A" },
  { id: "76", name: "Talia", gender: "girl", origin: "Hebrew", meaning: "Dew from God", pronunciation: "TAH-lee-ah", culturalContext: "Symbolizes gentle, refreshing blessings like morning dew.", themes: ["Nature", "Grace", "Peace"], syllables: 3, startingLetter: "T" },
  { id: "77", name: "Noam", gender: "neutral", origin: "Hebrew", meaning: "Pleasantness, charm", pronunciation: "NOH-ahm", culturalContext: "A beloved modern Hebrew name; also famous through linguist Noam Chomsky.", themes: ["Peace", "Grace", "Wisdom"], syllables: 2, startingLetter: "N" },
  { id: "78", name: "Ezra", gender: "boy", origin: "Hebrew", meaning: "Helper", pronunciation: "EZ-rah", culturalContext: "A biblical scribe and priest who led the return from Babylonian exile.", themes: ["Wisdom", "Faith", "Strength"], syllables: 2, startingLetter: "E" },

  // ===== TURKISH =====
  { id: "79", name: "Elif", gender: "girl", origin: "Turkish", meaning: "First letter of the Arabic alphabet, slender", pronunciation: "EH-lif", culturalContext: "Symbolizes the beginning and new starts; also evokes elegant slenderness.", themes: ["Beauty", "Hope", "Grace"], syllables: 2, startingLetter: "E" },
  { id: "80", name: "Deniz", gender: "neutral", origin: "Turkish", meaning: "Sea", pronunciation: "deh-NIZ", culturalContext: "A popular unisex name in Turkey reflecting the country's deep maritime heritage.", themes: ["Water", "Nature"], syllables: 2, startingLetter: "D" },
  { id: "81", name: "Baran", gender: "boy", origin: "Turkish", meaning: "Rain", pronunciation: "bah-RAHN", culturalContext: "Rain is seen as a blessing and symbol of renewal in Turkish culture.", themes: ["Nature", "Water", "Hope"], syllables: 2, startingLetter: "B" },

  // ===== IRISH =====
  { id: "82", name: "Saoirse", gender: "girl", origin: "Irish", meaning: "Freedom, liberty", pronunciation: "SEER-shah", culturalContext: "Became popular after the Irish independence movement; embodies the spirit of freedom.", themes: ["Courage", "Hope", "Strength"], syllables: 2, startingLetter: "S" },
  { id: "83", name: "Cian", gender: "boy", origin: "Irish", meaning: "Ancient, enduring", pronunciation: "KEE-an", culturalContext: "From Irish mythology, Cian was the father of Lugh, the god of light.", themes: ["Wisdom", "Light", "Strength"], syllables: 2, startingLetter: "C" },
  { id: "84", name: "Niamh", gender: "girl", origin: "Irish", meaning: "Bright, radiant", pronunciation: "NEEV", culturalContext: "In Irish mythology, Niamh of the Golden Hair led Oisín to Tír na nÓg, the land of eternal youth.", themes: ["Light", "Beauty", "Literary"], syllables: 1, startingLetter: "N" },
  { id: "85", name: "Oisín", gender: "boy", origin: "Irish", meaning: "Little deer", pronunciation: "USH-een", culturalContext: "The legendary poet-warrior of the Fianna in Irish mythology.", themes: ["Nature", "Literary", "Courage"], syllables: 2, startingLetter: "O" },
  { id: "86", name: "Aoife", gender: "girl", origin: "Irish", meaning: "Beauty, radiance", pronunciation: "EE-fah", culturalContext: "A legendary warrior princess in Irish mythology, celebrated for her strength.", themes: ["Beauty", "Courage", "Strength"], syllables: 2, startingLetter: "A" },

  // ===== ITALIAN =====
  { id: "87", name: "Matteo", gender: "boy", origin: "Italian", meaning: "Gift of God", pronunciation: "mah-TEH-oh", culturalContext: "The Italian form of Matthew, popular across Italy and increasingly worldwide.", themes: ["Faith", "Grace"], syllables: 3, startingLetter: "M" },
  { id: "88", name: "Ginevra", gender: "girl", origin: "Italian", meaning: "White shadow, fair one", pronunciation: "jee-NEH-vrah", culturalContext: "The Italian form of Guinevere; also the name of da Vinci's first major portrait.", themes: ["Beauty", "Literary", "Grace"], syllables: 3, startingLetter: "G" },
  { id: "89", name: "Luca", gender: "boy", origin: "Italian", meaning: "Bringer of light", pronunciation: "LOO-kah", culturalContext: "An Italian classic that has become globally popular for its warmth and simplicity.", themes: ["Light", "Joy"], syllables: 2, startingLetter: "L" },
  { id: "90", name: "Aria", gender: "girl", origin: "Italian", meaning: "Air, song, melody", pronunciation: "AH-ree-ah", culturalContext: "In music, an aria is a self-contained piece for one voice, typically in an opera.", themes: ["Music", "Beauty", "Grace"], syllables: 3, startingLetter: "A" },
  { id: "91", name: "Dante", gender: "boy", origin: "Italian", meaning: "Enduring, steadfast", pronunciation: "DAHN-teh", culturalContext: "Made immortal by Dante Alighieri, author of the Divine Comedy.", themes: ["Literary", "Strength", "Courage"], syllables: 2, startingLetter: "D" },

  // ===== GREEK =====
  { id: "92", name: "Thalia", gender: "girl", origin: "Greek", meaning: "To flourish, blooming", pronunciation: "THAH-lee-ah", culturalContext: "One of the nine Muses in Greek mythology, the Muse of comedy and pastoral poetry.", themes: ["Joy", "Nature", "Literary"], syllables: 3, startingLetter: "T" },
  { id: "93", name: "Atlas", gender: "boy", origin: "Greek", meaning: "Bearer, endurer", pronunciation: "AT-las", culturalContext: "The Titan who held up the celestial spheres; symbolizes immense strength.", themes: ["Strength", "Sky", "Courage"], syllables: 2, startingLetter: "A" },
  { id: "94", name: "Calliope", gender: "girl", origin: "Greek", meaning: "Beautiful voice", pronunciation: "kah-LY-oh-pee", culturalContext: "The chief Muse, presiding over eloquence and epic poetry.", themes: ["Music", "Beauty", "Literary"], syllables: 4, startingLetter: "C" },
  { id: "95", name: "Orion", gender: "boy", origin: "Greek", meaning: "Rising in the sky, hunter", pronunciation: "oh-RY-on", culturalContext: "The great hunter placed among the stars as one of the most recognizable constellations.", themes: ["Stars", "Sky", "Courage", "Strength"], syllables: 3, startingLetter: "O" },
  { id: "96", name: "Selene", gender: "girl", origin: "Greek", meaning: "Moon", pronunciation: "seh-LEH-nee", culturalContext: "The Titan goddess of the moon who drove her silver chariot across the night sky.", themes: ["Stars", "Light", "Beauty"], syllables: 3, startingLetter: "S" },
  { id: "97", name: "Theo", gender: "boy", origin: "Greek", meaning: "God, divine gift", pronunciation: "THEE-oh", culturalContext: "A versatile name that works as a standalone or short form of Theodore/Theodoros.", themes: ["Faith", "Grace"], syllables: 2, startingLetter: "T" },

  // ===== NORSE =====
  { id: "98", name: "Freya", gender: "girl", origin: "Norse", meaning: "Noble woman, goddess of love", pronunciation: "FRAY-ah", culturalContext: "The Norse goddess of love, beauty, fertility, and war. She chose half the slain warriors for her hall.", themes: ["Love", "Beauty", "Strength", "Courage"], syllables: 2, startingLetter: "F" },
  { id: "99", name: "Leif", gender: "boy", origin: "Norse", meaning: "Heir, descendant, beloved", pronunciation: "LAYF", culturalContext: "Made famous by Leif Erikson, the Norse explorer who reached North America.", themes: ["Courage", "Nature"], syllables: 1, startingLetter: "L" },
  { id: "100", name: "Astrid", gender: "girl", origin: "Norse", meaning: "Divine beauty, divine strength", pronunciation: "AS-trid", culturalContext: "A name of Scandinavian queens and a beloved literary character by Astrid Lindgren.", themes: ["Beauty", "Strength", "Royalty"], syllables: 2, startingLetter: "A" },
  { id: "101", name: "Bjorn", gender: "boy", origin: "Norse", meaning: "Bear", pronunciation: "BYORN", culturalContext: "The bear was revered in Norse culture as a symbol of strength and courage.", themes: ["Strength", "Nature", "Courage"], syllables: 1, startingLetter: "B" },
  { id: "102", name: "Sigrid", gender: "girl", origin: "Norse", meaning: "Beautiful victory", pronunciation: "SIG-rid", culturalContext: "Combines 'sigr' (victory) and 'fríðr' (beautiful); a name of Norse heroines.", themes: ["Beauty", "Courage", "Strength"], syllables: 2, startingLetter: "S" },

  // ===== SLAVIC =====
  { id: "103", name: "Mila", gender: "girl", origin: "Slavic", meaning: "Gracious, dear", pronunciation: "MEE-lah", culturalContext: "A pan-Slavic name meaning 'dear one'; popular from Russia to the Balkans.", themes: ["Love", "Grace", "Beauty"], syllables: 2, startingLetter: "M" },
  { id: "104", name: "Luka", gender: "boy", origin: "Slavic", meaning: "Light, bringer of light", pronunciation: "LOO-kah", culturalContext: "The Slavic form of Luke/Luca, popular across Eastern Europe.", themes: ["Light", "Hope"], syllables: 2, startingLetter: "L" },
  { id: "105", name: "Anastasia", gender: "girl", origin: "Slavic", meaning: "Resurrection", pronunciation: "ah-nah-STAH-see-ah", culturalContext: "A name of Russian royalty and Orthodox saints, symbolizing rebirth.", themes: ["Hope", "Faith", "Royalty"], syllables: 5, startingLetter: "A" },
  { id: "106", name: "Nikolai", gender: "boy", origin: "Slavic", meaning: "Victory of the people", pronunciation: "nee-koh-LY", culturalContext: "The Slavic form of Nicholas; borne by tsars and literary characters.", themes: ["Courage", "Strength", "Literary"], syllables: 3, startingLetter: "N" },

  // ===== FRENCH =====
  { id: "107", name: "Elodie", gender: "girl", origin: "French", meaning: "Foreign riches, marsh flower", pronunciation: "EH-loh-dee", culturalContext: "A distinctly French name that evokes elegance and natural beauty.", themes: ["Beauty", "Nature"], syllables: 3, startingLetter: "E" },
  { id: "108", name: "Lucien", gender: "boy", origin: "French", meaning: "Light", pronunciation: "loo-see-EN", culturalContext: "The French form of Lucius; carries an artistic, literary sophistication.", themes: ["Light", "Literary"], syllables: 3, startingLetter: "L" },
  { id: "109", name: "Colette", gender: "girl", origin: "French", meaning: "Victory of the people", pronunciation: "koh-LET", culturalContext: "Made iconic by the French novelist Colette, known for her vivid, sensual writing.", themes: ["Literary", "Courage", "Beauty"], syllables: 2, startingLetter: "C" },
  { id: "110", name: "Remy", gender: "neutral", origin: "French", meaning: "Oarsman, remedy", pronunciation: "REH-mee", culturalContext: "A unisex French name with a spirited, adventurous quality.", themes: ["Courage", "Joy"], syllables: 2, startingLetter: "R" },

  // ===== SPANISH =====
  { id: "111", name: "Paloma", gender: "girl", origin: "Spanish", meaning: "Dove", pronunciation: "pah-LOH-mah", culturalContext: "The dove symbolizes peace in Spanish culture; also associated with artist Pablo Picasso's daughter.", themes: ["Peace", "Nature", "Beauty"], syllables: 3, startingLetter: "P" },
  { id: "112", name: "Santiago", gender: "boy", origin: "Spanish", meaning: "Saint James", pronunciation: "sahn-tee-AH-goh", culturalContext: "The patron saint of Spain; the Camino de Santiago is one of the world's great pilgrimages.", themes: ["Faith", "Courage"], syllables: 4, startingLetter: "S" },
  { id: "113", name: "Esperanza", gender: "girl", origin: "Spanish", meaning: "Hope, expectation", pronunciation: "es-peh-RAHN-sah", culturalContext: "A deeply meaningful name embodying the virtue of hope in Hispanic culture.", themes: ["Hope", "Faith"], syllables: 4, startingLetter: "E" },
  { id: "114", name: "Mateo", gender: "boy", origin: "Spanish", meaning: "Gift of God", pronunciation: "mah-TEH-oh", culturalContext: "The Spanish form of Matthew; currently one of the most popular names in the Spanish-speaking world.", themes: ["Faith", "Grace"], syllables: 3, startingLetter: "M" },
  { id: "115", name: "Luna", gender: "girl", origin: "Spanish", meaning: "Moon", pronunciation: "LOO-nah", culturalContext: "The moon holds deep significance in Hispanic folklore and poetry.", themes: ["Stars", "Nature", "Beauty"], syllables: 2, startingLetter: "L" },

  // ===== GERMAN =====
  { id: "116", name: "Liesel", gender: "girl", origin: "German", meaning: "Pledged to God", pronunciation: "LEE-zuhl", culturalContext: "A diminutive of Elisabeth; made literary-famous by 'The Book Thief.'", themes: ["Faith", "Literary", "Grace"], syllables: 2, startingLetter: "L" },
  { id: "117", name: "Friedrich", gender: "boy", origin: "German", meaning: "Peaceful ruler", pronunciation: "FREE-drish", culturalContext: "Borne by kings and philosophers, including Friedrich Nietzsche and Friedrich Schiller.", themes: ["Peace", "Royalty", "Wisdom"], syllables: 2, startingLetter: "F" },
  { id: "118", name: "Greta", gender: "girl", origin: "German", meaning: "Pearl", pronunciation: "GREH-tah", culturalContext: "A classic German name revived by actress Greta Garbo and activist Greta Thunberg.", themes: ["Beauty", "Strength"], syllables: 2, startingLetter: "G" },

  // ===== WELSH =====
  { id: "119", name: "Rhiannon", gender: "girl", origin: "Welsh", meaning: "Great queen, divine queen", pronunciation: "ree-AN-on", culturalContext: "A goddess in the Mabinogion, the great collection of Welsh mythology.", themes: ["Royalty", "Beauty", "Literary"], syllables: 3, startingLetter: "R" },
  { id: "120", name: "Emrys", gender: "boy", origin: "Welsh", meaning: "Immortal", pronunciation: "EM-ris", culturalContext: "The Welsh name for Merlin (Myrddin Emrys) in Arthurian legend.", themes: ["Wisdom", "Literary", "Strength"], syllables: 2, startingLetter: "E" },
  { id: "121", name: "Cerys", gender: "girl", origin: "Welsh", meaning: "Love", pronunciation: "KEH-ris", culturalContext: "A modern Welsh name that has become popular in Wales and beyond.", themes: ["Love", "Grace"], syllables: 2, startingLetter: "C" },

  // ===== SCOTTISH =====
  { id: "122", name: "Ailsa", gender: "girl", origin: "Scottish", meaning: "Elf victory, from Ailsa Craig", pronunciation: "AYL-sah", culturalContext: "Named after Ailsa Craig, a dramatic island rock in the Firth of Clyde.", themes: ["Nature", "Strength"], syllables: 2, startingLetter: "A" },
  { id: "123", name: "Callum", gender: "boy", origin: "Scottish", meaning: "Dove", pronunciation: "KAL-um", culturalContext: "Derived from Saint Columba, who brought Christianity to Scotland.", themes: ["Peace", "Faith"], syllables: 2, startingLetter: "C" },
  { id: "124", name: "Isla", gender: "girl", origin: "Scottish", meaning: "Island", pronunciation: "EYE-lah", culturalContext: "Named after the Scottish island of Islay; one of the fastest-rising names globally.", themes: ["Nature", "Water", "Beauty"], syllables: 2, startingLetter: "I" },

  // ===== MAORI =====
  { id: "125", name: "Aroha", gender: "girl", origin: "Maori", meaning: "Love, compassion", pronunciation: "ah-ROH-hah", culturalContext: "One of the most important concepts in Maori culture, encompassing love, empathy, and charity.", themes: ["Love", "Peace", "Grace"], syllables: 3, startingLetter: "A" },
  { id: "126", name: "Nikau", gender: "boy", origin: "Maori", meaning: "Nikau palm tree", pronunciation: "NEE-kow", culturalContext: "Named after New Zealand's only native palm tree, symbolizing resilience.", themes: ["Nature", "Strength", "Earth"], syllables: 2, startingLetter: "N" },
  { id: "127", name: "Manaia", gender: "neutral", origin: "Maori", meaning: "Guardian spirit, beautiful", pronunciation: "mah-NAI-ah", culturalContext: "The manaia is a spiritual guardian figure in Maori carving tradition.", themes: ["Faith", "Beauty", "Grace"], syllables: 3, startingLetter: "M" },
  { id: "128", name: "Tane", gender: "boy", origin: "Maori", meaning: "God of forests and birds", pronunciation: "TAH-neh", culturalContext: "Tane Mahuta is one of the most important gods in Maori mythology.", themes: ["Nature", "Earth", "Strength"], syllables: 2, startingLetter: "T" },

  // ===== HAWAIIAN =====
  { id: "129", name: "Kai", gender: "neutral", origin: "Hawaiian", meaning: "Sea, ocean", pronunciation: "KAI", culturalContext: "One of Hawaii's most exported names; the ocean is central to Hawaiian identity.", themes: ["Water", "Nature"], syllables: 1, startingLetter: "K" },
  { id: "130", name: "Leilani", gender: "girl", origin: "Hawaiian", meaning: "Heavenly garland, royal child", pronunciation: "lay-LAH-nee", culturalContext: "Combines 'lei' (garland) and 'lani' (heaven); evokes Hawaiian natural beauty.", themes: ["Beauty", "Nature", "Royalty"], syllables: 3, startingLetter: "L" },
  { id: "131", name: "Koa", gender: "boy", origin: "Hawaiian", meaning: "Brave, bold warrior; koa tree", pronunciation: "KOH-ah", culturalContext: "The koa tree is Hawaii's largest native tree, valued for its strength and beauty.", themes: ["Courage", "Nature", "Strength"], syllables: 2, startingLetter: "K" },
  { id: "132", name: "Malia", gender: "girl", origin: "Hawaiian", meaning: "Calm, peaceful waters", pronunciation: "mah-LEE-ah", culturalContext: "The Hawaiian form of Mary; carries serene ocean imagery.", themes: ["Peace", "Water", "Grace"], syllables: 3, startingLetter: "M" },
  { id: "133", name: "Makoa", gender: "boy", origin: "Hawaiian", meaning: "Fearless, bold", pronunciation: "mah-KOH-ah", culturalContext: "Embodies the warrior spirit and courage valued in Hawaiian culture.", themes: ["Courage", "Strength"], syllables: 3, startingLetter: "M" },

  // ===== NATIVE AMERICAN =====
  { id: "134", name: "Kaya", gender: "girl", origin: "Native American", meaning: "My elder sister (Hopi)", pronunciation: "KAI-ah", culturalContext: "A Hopi name expressing familial bonds; also means 'rock' in Turkish.", themes: ["Love", "Earth", "Nature"], syllables: 2, startingLetter: "K" },
  { id: "135", name: "Nita", gender: "girl", origin: "Native American", meaning: "Bear (Choctaw)", pronunciation: "NEE-tah", culturalContext: "The bear is revered in many Native American traditions as a powerful spirit animal.", themes: ["Nature", "Strength", "Courage"], syllables: 2, startingLetter: "N" },
  { id: "136", name: "Koda", gender: "boy", origin: "Native American", meaning: "Friend, ally (Dakota Sioux)", pronunciation: "KOH-dah", culturalContext: "Reflects the Lakota/Dakota value of kinship and alliance.", themes: ["Love", "Peace"], syllables: 2, startingLetter: "K" },
  { id: "137", name: "Nova", gender: "girl", origin: "Native American", meaning: "Chases butterflies (Hopi)", pronunciation: "NOH-vah", culturalContext: "In Hopi culture, also a Latin word meaning 'new'; carries dual cultural significance.", themes: ["Nature", "Stars", "Hope"], syllables: 2, startingLetter: "N" },

  // ===== ENGLISH =====
  { id: "138", name: "Rowan", gender: "neutral", origin: "English", meaning: "Rowan tree, little red-haired one", pronunciation: "ROH-an", culturalContext: "The rowan tree was believed to ward off evil; a name connected to nature and protection.", themes: ["Nature", "Strength", "Earth"], syllables: 2, startingLetter: "R" },
  { id: "139", name: "Ivy", gender: "girl", origin: "English", meaning: "Ivy plant, fidelity", pronunciation: "AH-ee-vee", culturalContext: "The ivy plant symbolizes fidelity and eternity; a classic botanical name.", themes: ["Nature", "Love", "Earth"], syllables: 2, startingLetter: "I" },
  { id: "140", name: "Jasper", gender: "boy", origin: "English", meaning: "Treasurer, bringer of treasure", pronunciation: "JAS-per", culturalContext: "One of the traditional names of the Three Magi; also a precious gemstone.", themes: ["Earth", "Faith"], syllables: 2, startingLetter: "J" },
  { id: "141", name: "Hazel", gender: "girl", origin: "English", meaning: "Hazel tree, light brown", pronunciation: "HAY-zuhl", culturalContext: "The hazel tree was sacred to the Celts, associated with wisdom and inspiration.", themes: ["Nature", "Wisdom", "Earth"], syllables: 2, startingLetter: "H" },
  { id: "142", name: "Felix", gender: "boy", origin: "English", meaning: "Happy, fortunate", pronunciation: "FEE-liks", culturalContext: "A name used since Roman times, carried by saints, popes, and cartoon cats.", themes: ["Joy", "Hope"], syllables: 2, startingLetter: "F" },
  { id: "143", name: "Willow", gender: "girl", origin: "English", meaning: "Willow tree, graceful", pronunciation: "WIL-oh", culturalContext: "The willow tree bends but never breaks, symbolizing resilience and grace.", themes: ["Nature", "Grace", "Beauty"], syllables: 2, startingLetter: "W" },
  { id: "144", name: "Hugo", gender: "boy", origin: "English", meaning: "Mind, intellect", pronunciation: "HYOO-goh", culturalContext: "A name of Germanic origin popularized by Victor Hugo, the French literary giant.", themes: ["Wisdom", "Literary"], syllables: 2, startingLetter: "H" },
  { id: "145", name: "Clementine", gender: "girl", origin: "English", meaning: "Merciful, gentle", pronunciation: "KLEH-men-teen", culturalContext: "A vintage name experiencing revival; carries warmth and gentle strength.", themes: ["Grace", "Love", "Peace"], syllables: 3, startingLetter: "C" },
  { id: "146", name: "Silas", gender: "boy", origin: "English", meaning: "Wood, forest", pronunciation: "SY-las", culturalContext: "A biblical name associated with nature; protagonist of George Eliot's 'Silas Marner.'", themes: ["Nature", "Literary", "Earth"], syllables: 2, startingLetter: "S" },
  { id: "147", name: "Aurora", gender: "girl", origin: "English", meaning: "Dawn", pronunciation: "aw-ROAR-ah", culturalContext: "The Roman goddess of dawn; also the name of the Northern Lights phenomenon.", themes: ["Light", "Nature", "Beauty", "Stars"], syllables: 3, startingLetter: "A" },
  { id: "148", name: "Sage", gender: "neutral", origin: "English", meaning: "Wise, herb", pronunciation: "SAYJ", culturalContext: "A nature name carrying dual meaning — wisdom and the aromatic herb used in healing.", themes: ["Wisdom", "Nature", "Earth"], syllables: 1, startingLetter: "S" },
  { id: "149", name: "Wren", gender: "neutral", origin: "English", meaning: "Small bird", pronunciation: "REN", culturalContext: "The wren is the 'king of birds' in European folklore despite its small size.", themes: ["Nature", "Grace"], syllables: 1, startingLetter: "W" },
  { id: "150", name: "Iris", gender: "girl", origin: "English", meaning: "Rainbow, iris flower", pronunciation: "EYE-ris", culturalContext: "The Greek goddess of the rainbow and messenger of the gods; also a beloved garden flower.", themes: ["Nature", "Beauty", "Light"], syllables: 2, startingLetter: "I" },

  // ===== LATIN =====
  { id: "151", name: "Cassius", gender: "boy", origin: "Latin", meaning: "Hollow, vain, or helmet", pronunciation: "KASH-us", culturalContext: "An ancient Roman family name; made iconic by Muhammad Ali (born Cassius Clay).", themes: ["Strength", "Courage"], syllables: 3, startingLetter: "C" },
  { id: "152", name: "Aurelia", gender: "girl", origin: "Latin", meaning: "Golden", pronunciation: "aw-REH-lee-ah", culturalContext: "From the Roman family name Aurelius; evokes golden radiance and warmth.", themes: ["Light", "Beauty", "Royalty"], syllables: 4, startingLetter: "A" },
  { id: "153", name: "Atticus", gender: "boy", origin: "Latin", meaning: "From Attica, man of Athens", pronunciation: "AT-ih-kus", culturalContext: "Made literary-famous by Atticus Finch in 'To Kill a Mockingbird.'", themes: ["Wisdom", "Literary", "Courage"], syllables: 3, startingLetter: "A" },
  { id: "154", name: "Lyra", gender: "girl", origin: "Latin", meaning: "Lyre, constellation", pronunciation: "LY-rah", culturalContext: "A constellation named after Orpheus's lyre; also the heroine of Philip Pullman's novels.", themes: ["Music", "Stars", "Literary"], syllables: 2, startingLetter: "L" },
  { id: "155", name: "Magnus", gender: "boy", origin: "Latin", meaning: "Great", pronunciation: "MAG-nus", culturalContext: "Carried by Scandinavian kings and Roman emperors; simply means 'the great.'", themes: ["Strength", "Royalty"], syllables: 2, startingLetter: "M" },
  { id: "156", name: "Stella", gender: "girl", origin: "Latin", meaning: "Star", pronunciation: "STEH-lah", culturalContext: "The Latin word for star; used by literary greats from Swift to Tennessee Williams.", themes: ["Stars", "Light", "Beauty"], syllables: 2, startingLetter: "S" },
  { id: "157", name: "Maximus", gender: "boy", origin: "Latin", meaning: "Greatest", pronunciation: "MAK-sih-mus", culturalContext: "A Roman title and name; immortalized in the film 'Gladiator.'", themes: ["Strength", "Courage", "Royalty"], syllables: 3, startingLetter: "M" },

  // ===== URDU =====
  { id: "158", name: "Zain", gender: "boy", origin: "Urdu", meaning: "Beauty, grace", pronunciation: "ZAYN", culturalContext: "A popular name across Pakistan and the Muslim world, denoting beauty.", themes: ["Beauty", "Grace"], syllables: 1, startingLetter: "Z" },
  { id: "159", name: "Inaya", gender: "girl", origin: "Urdu", meaning: "Concern, care, protection", pronunciation: "ih-NAH-yah", culturalContext: "An Arabic-origin name beloved in South Asia, expressing divine care.", themes: ["Love", "Faith", "Grace"], syllables: 3, startingLetter: "I" },
  { id: "160", name: "Ayaan", gender: "boy", origin: "Urdu", meaning: "Gift of God, lucky", pronunciation: "ah-YAHN", culturalContext: "A contemporary name rising in popularity across South Asia and beyond.", themes: ["Faith", "Hope", "Joy"], syllables: 2, startingLetter: "A" },

  // ===== MORE ADDITIONS TO REACH ~300 =====

  // Additional Hindi
  { id: "161", name: "Priya", gender: "girl", origin: "Hindi", meaning: "Beloved, dear", pronunciation: "PREE-yah", culturalContext: "One of the most classic Indian names, expressing deep love and affection.", themes: ["Love", "Beauty"], syllables: 2, startingLetter: "P" },
  { id: "162", name: "Rohan", gender: "boy", origin: "Hindi", meaning: "Ascending, healing", pronunciation: "ROH-han", culturalContext: "A name with Sanskrit roots signifying growth and upward movement.", themes: ["Hope", "Strength"], syllables: 2, startingLetter: "R" },
  { id: "163", name: "Nisha", gender: "girl", origin: "Hindi", meaning: "Night", pronunciation: "NEE-shah", culturalContext: "The beauty of the night sky is celebrated in this classic name.", themes: ["Stars", "Beauty"], syllables: 2, startingLetter: "N" },

  // Additional Arabic
  { id: "164", name: "Amir", gender: "boy", origin: "Arabic", meaning: "Prince, commander", pronunciation: "ah-MEER", culturalContext: "A title of nobility used across the Islamic world, from Morocco to Malaysia.", themes: ["Royalty", "Strength", "Courage"], syllables: 2, startingLetter: "A" },
  { id: "165", name: "Safiya", gender: "girl", origin: "Arabic", meaning: "Pure, serene, best friend", pronunciation: "SAH-fee-yah", culturalContext: "One of the names of the Prophet Muhammad's wives, denoting purity.", themes: ["Peace", "Grace", "Beauty"], syllables: 3, startingLetter: "S" },
  { id: "166", name: "Tariq", gender: "boy", origin: "Arabic", meaning: "Morning star, he who knocks at the door", pronunciation: "TAH-rik", culturalContext: "Named after Tariq ibn Ziyad who crossed the Strait of Gibraltar.", themes: ["Stars", "Courage", "Strength"], syllables: 2, startingLetter: "T" },
  { id: "167", name: "Maryam", gender: "girl", origin: "Arabic", meaning: "Beloved, sea of bitterness", pronunciation: "MAR-yam", culturalContext: "The Arabic form of Mary; Maryam is the most mentioned woman in the Quran.", themes: ["Faith", "Love", "Grace"], syllables: 3, startingLetter: "M" },

  // Additional Japanese
  { id: "168", name: "Akira", gender: "neutral", origin: "Japanese", meaning: "Bright, clear, intelligent", pronunciation: "ah-KEE-rah", culturalContext: "Made globally famous by filmmaker Akira Kurosawa; embodies clarity and brilliance.", themes: ["Light", "Wisdom"], syllables: 3, startingLetter: "A" },
  { id: "169", name: "Hinata", gender: "neutral", origin: "Japanese", meaning: "Sunny place, facing the sun", pronunciation: "hee-NAH-tah", culturalContext: "A nature-inspired name evoking warmth and sunlit meadows.", themes: ["Light", "Nature", "Joy"], syllables: 3, startingLetter: "H" },
  { id: "170", name: "Naomi", gender: "girl", origin: "Japanese", meaning: "Straight, beautiful", pronunciation: "nah-OH-mee", culturalContext: "Also a Hebrew name meaning 'pleasant'; cross-cultural appeal.", themes: ["Beauty", "Grace"], syllables: 3, startingLetter: "N" },

  // Additional Greek
  { id: "171", name: "Cleo", gender: "girl", origin: "Greek", meaning: "Glory, pride", pronunciation: "KLEE-oh", culturalContext: "Short for Cleopatra; the name evokes the glory of ancient civilizations.", themes: ["Royalty", "Strength", "Beauty"], syllables: 2, startingLetter: "C" },
  { id: "172", name: "Nico", gender: "boy", origin: "Greek", meaning: "Victory of the people", pronunciation: "NEE-koh", culturalContext: "A modern short form of Nikolaos, popular across Europe.", themes: ["Courage", "Strength"], syllables: 2, startingLetter: "N" },
  { id: "173", name: "Penelope", gender: "girl", origin: "Greek", meaning: "Weaver", pronunciation: "peh-NEH-loh-pee", culturalContext: "Odysseus's faithful wife in Homer's Odyssey, symbolizing patience and devotion.", themes: ["Love", "Literary", "Grace", "Wisdom"], syllables: 4, startingLetter: "P" },
  { id: "174", name: "Zephyr", gender: "boy", origin: "Greek", meaning: "West wind", pronunciation: "ZEH-fer", culturalContext: "The god of the gentle west wind in Greek mythology.", themes: ["Nature", "Sky", "Peace"], syllables: 2, startingLetter: "Z" },

  // Additional Norse
  { id: "175", name: "Ingrid", gender: "girl", origin: "Norse", meaning: "Beautiful, beloved by Ing", pronunciation: "ING-rid", culturalContext: "Associated with Scandinavian royalty and actress Ingrid Bergman.", themes: ["Beauty", "Love"], syllables: 2, startingLetter: "I" },
  { id: "176", name: "Erik", gender: "boy", origin: "Norse", meaning: "Eternal ruler", pronunciation: "AIR-ik", culturalContext: "One of the most enduring Scandinavian names, borne by Viking kings and explorers.", themes: ["Royalty", "Strength"], syllables: 2, startingLetter: "E" },

  // Additional Italian
  { id: "177", name: "Elena", gender: "girl", origin: "Italian", meaning: "Bright, shining light", pronunciation: "eh-LEH-nah", culturalContext: "The Italian form of Helen; evokes classical beauty and luminosity.", themes: ["Light", "Beauty"], syllables: 3, startingLetter: "E" },
  { id: "178", name: "Marco", gender: "boy", origin: "Italian", meaning: "Warlike, dedicated to Mars", pronunciation: "MAR-koh", culturalContext: "Made famous by explorer Marco Polo; a quintessential Italian name.", themes: ["Courage", "Strength"], syllables: 2, startingLetter: "M" },

  // Additional French
  { id: "179", name: "Amelie", gender: "girl", origin: "French", meaning: "Hardworking, striving", pronunciation: "AH-meh-lee", culturalContext: "Popularized worldwide by the beloved French film 'Amélie.'", themes: ["Joy", "Hope", "Literary"], syllables: 3, startingLetter: "A" },
  { id: "180", name: "Julien", gender: "boy", origin: "French", meaning: "Youthful, downy", pronunciation: "zhoo-lee-EN", culturalContext: "The French form of Julian; carries a romantic, artistic sensibility.", themes: ["Grace", "Literary"], syllables: 3, startingLetter: "J" },
  { id: "181", name: "Margaux", gender: "girl", origin: "French", meaning: "Pearl", pronunciation: "mar-GOH", culturalContext: "Named after the renowned Bordeaux wine region; exudes French sophistication.", themes: ["Beauty", "Grace"], syllables: 2, startingLetter: "M" },

  // Additional English
  { id: "182", name: "Archer", gender: "boy", origin: "English", meaning: "Bowman", pronunciation: "AR-cher", culturalContext: "An occupational name turned modern favorite, evoking skill and precision.", themes: ["Courage", "Strength"], syllables: 2, startingLetter: "A" },
  { id: "183", name: "Juniper", gender: "girl", origin: "English", meaning: "Juniper tree, young", pronunciation: "JOO-nih-per", culturalContext: "A nature name celebrating the evergreen tree known for its berries and resilience.", themes: ["Nature", "Earth"], syllables: 3, startingLetter: "J" },
  { id: "184", name: "Beckett", gender: "boy", origin: "English", meaning: "Bee cottage, little brook", pronunciation: "BEH-kit", culturalContext: "A literary surname name, associated with playwright Samuel Beckett.", themes: ["Literary", "Nature"], syllables: 2, startingLetter: "B" },
  { id: "185", name: "Violet", gender: "girl", origin: "English", meaning: "Purple flower", pronunciation: "VY-oh-let", culturalContext: "A Victorian botanical name that has seen a beautiful revival.", themes: ["Nature", "Beauty"], syllables: 3, startingLetter: "V" },
  { id: "186", name: "Finn", gender: "boy", origin: "English", meaning: "Fair, white", pronunciation: "FIN", culturalContext: "From Irish mythology (Finn MacCool) and Mark Twain's Huckleberry Finn.", themes: ["Courage", "Literary", "Nature"], syllables: 1, startingLetter: "F" },
  { id: "187", name: "Olive", gender: "girl", origin: "English", meaning: "Olive tree, peace", pronunciation: "AH-liv", culturalContext: "The olive branch is an ancient symbol of peace; a warm botanical name.", themes: ["Peace", "Nature", "Earth"], syllables: 2, startingLetter: "O" },
  { id: "188", name: "Miles", gender: "boy", origin: "English", meaning: "Soldier, merciful", pronunciation: "MYLZ", culturalContext: "Made iconic by jazz legend Miles Davis; carries both strength and artistry.", themes: ["Music", "Courage", "Grace"], syllables: 1, startingLetter: "M" },

  // Additional Latin
  { id: "189", name: "Octavia", gender: "girl", origin: "Latin", meaning: "Eighth", pronunciation: "ok-TAY-vee-ah", culturalContext: "A noble Roman name; Octavia was the sister of Emperor Augustus.", themes: ["Royalty", "Strength", "Grace"], syllables: 4, startingLetter: "O" },
  { id: "190", name: "Leo", gender: "boy", origin: "Latin", meaning: "Lion", pronunciation: "LEE-oh", culturalContext: "A zodiac sign and papal name; embodies boldness and warmth.", themes: ["Strength", "Courage", "Fire"], syllables: 2, startingLetter: "L" },
  { id: "191", name: "Celeste", gender: "girl", origin: "Latin", meaning: "Heavenly, celestial", pronunciation: "seh-LEST", culturalContext: "From the Latin 'caelestis'; evokes the beauty of the heavens.", themes: ["Sky", "Stars", "Beauty"], syllables: 2, startingLetter: "C" },

  // Additional Persian
  { id: "192", name: "Shirin", gender: "girl", origin: "Persian", meaning: "Sweet, pleasant", pronunciation: "shee-REEN", culturalContext: "The beloved in the classic Persian love story 'Khosrow and Shirin.'", themes: ["Love", "Literary", "Beauty"], syllables: 2, startingLetter: "S" },
  { id: "193", name: "Darius", gender: "boy", origin: "Persian", meaning: "Possessing goodness, upholder of good", pronunciation: "dah-RY-us", culturalContext: "Named after Darius the Great of Persia, a legendary ruler and administrator.", themes: ["Royalty", "Wisdom", "Strength"], syllables: 3, startingLetter: "D" },

  // Additional Hebrew
  { id: "194", name: "Miriam", gender: "girl", origin: "Hebrew", meaning: "Wished-for child, sea of bitterness", pronunciation: "MEER-ee-am", culturalContext: "The sister of Moses; one of the oldest recorded female names in history.", themes: ["Faith", "Strength", "Love"], syllables: 3, startingLetter: "M" },
  { id: "195", name: "Levi", gender: "boy", origin: "Hebrew", meaning: "Joined, attached", pronunciation: "LEE-vy", culturalContext: "One of the twelve tribes of Israel; symbolizes unity and connection.", themes: ["Love", "Faith"], syllables: 2, startingLetter: "L" },
  { id: "196", name: "Shiloh", gender: "neutral", origin: "Hebrew", meaning: "Tranquil, peaceful", pronunciation: "SHY-loh", culturalContext: "A biblical place name meaning peace; used for all genders.", themes: ["Peace", "Grace"], syllables: 2, startingLetter: "S" },

  // Additional Korean
  { id: "197", name: "Haneul", gender: "neutral", origin: "Korean", meaning: "Sky, heaven", pronunciation: "hah-NUHL", culturalContext: "A pure Korean name (not Chinese-derived) reflecting the openness of the sky.", themes: ["Sky", "Nature", "Hope"], syllables: 2, startingLetter: "H" },
  { id: "198", name: "Yuna", gender: "girl", origin: "Korean", meaning: "To shine, the chosen one", pronunciation: "YOO-nah", culturalContext: "One of Korea's most beloved names, popularized by figure skater Kim Yuna.", themes: ["Light", "Beauty", "Grace"], syllables: 2, startingLetter: "Y" },

  // Additional Chinese
  { id: "199", name: "Zhen", gender: "neutral", origin: "Chinese", meaning: "Precious, genuine, true", pronunciation: "JUHN", culturalContext: "A name emphasizing the Confucian value of authenticity.", themes: ["Wisdom", "Grace"], syllables: 1, startingLetter: "Z" },
  { id: "200", name: "Yue", gender: "girl", origin: "Chinese", meaning: "Moon, delight", pronunciation: "YOO-eh", culturalContext: "The moon is a central symbol in Chinese poetry and the Mid-Autumn Festival.", themes: ["Stars", "Beauty", "Peace"], syllables: 1, startingLetter: "Y" },

  // Additional Swahili
  { id: "201", name: "Jabari", gender: "boy", origin: "Swahili", meaning: "Brave, fearless", pronunciation: "jah-BAH-ree", culturalContext: "A powerful name expressing courage, popular across East Africa and the diaspora.", themes: ["Courage", "Strength"], syllables: 3, startingLetter: "J" },
  { id: "202", name: "Zahara", gender: "girl", origin: "Swahili", meaning: "Flower, to shine", pronunciation: "zah-HAH-rah", culturalContext: "Combines Swahili and Arabic influences; means both flower and radiance.", themes: ["Beauty", "Light", "Nature"], syllables: 3, startingLetter: "Z" },

  // Additional Igbo
  { id: "203", name: "Chinwe", gender: "girl", origin: "Igbo", meaning: "God owns", pronunciation: "CHIN-weh", culturalContext: "An Igbo name expressing the belief that every child belongs to God.", themes: ["Faith", "Grace"], syllables: 2, startingLetter: "C" },
  { id: "204", name: "Emeka", gender: "boy", origin: "Igbo", meaning: "God has done great things", pronunciation: "eh-MEH-kah", culturalContext: "Short form of Chukwuemeka; a popular name across Nigeria.", themes: ["Faith", "Joy"], syllables: 3, startingLetter: "E" },

  // Additional Sanskrit
  { id: "205", name: "Bodhi", gender: "neutral", origin: "Sanskrit", meaning: "Awakening, enlightenment", pronunciation: "BOH-dee", culturalContext: "The Buddha achieved enlightenment under the Bodhi tree; a name of deep spiritual significance.", themes: ["Wisdom", "Peace", "Nature"], syllables: 2, startingLetter: "B" },
  { id: "206", name: "Kiran", gender: "neutral", origin: "Sanskrit", meaning: "Ray of light", pronunciation: "KIH-ran", culturalContext: "A unisex name popular across South Asia, celebrating luminosity.", themes: ["Light", "Hope"], syllables: 2, startingLetter: "K" },

  // Additional Tamil
  { id: "207", name: "Surya", gender: "boy", origin: "Tamil", meaning: "Sun god", pronunciation: "SOOR-yah", culturalContext: "Named after the solar deity; the sun is central to Tamil temple architecture.", themes: ["Light", "Fire", "Strength"], syllables: 2, startingLetter: "S" },
  { id: "208", name: "Kavitha", gender: "girl", origin: "Tamil", meaning: "Poem, poetry", pronunciation: "KAH-vih-tah", culturalContext: "Celebrates the rich literary tradition of Tamil, one of the world's oldest languages.", themes: ["Literary", "Beauty", "Music"], syllables: 3, startingLetter: "K" },

  // Additional Spanish
  { id: "209", name: "Valentina", gender: "girl", origin: "Spanish", meaning: "Strong, vigorous, healthy", pronunciation: "vah-len-TEE-nah", culturalContext: "Derived from 'valens' (strong); one of the most popular Latin American names.", themes: ["Strength", "Love", "Beauty"], syllables: 4, startingLetter: "V" },
  { id: "210", name: "Rafael", gender: "boy", origin: "Spanish", meaning: "God has healed", pronunciation: "rah-fah-EL", culturalContext: "The archangel of healing; a name of both spiritual and artistic significance.", themes: ["Faith", "Hope", "Grace"], syllables: 3, startingLetter: "R" },
  { id: "211", name: "Camila", gender: "girl", origin: "Spanish", meaning: "Young ceremonial attendant", pronunciation: "kah-MEE-lah", culturalContext: "Originally from Latin; now one of the most popular girls' names across Latin America.", themes: ["Grace", "Beauty"], syllables: 3, startingLetter: "C" },

  // Additional Irish
  { id: "212", name: "Ciaran", gender: "boy", origin: "Irish", meaning: "Little dark one", pronunciation: "KEER-ahn", culturalContext: "Named after several Irish saints; one of Ireland's most enduring names.", themes: ["Faith", "Wisdom"], syllables: 2, startingLetter: "C" },
  { id: "213", name: "Maeve", gender: "girl", origin: "Irish", meaning: "She who intoxicates, the cause of great joy", pronunciation: "MAYV", culturalContext: "Queen Maeve of Connacht is one of the most powerful figures in Irish mythology.", themes: ["Royalty", "Strength", "Joy"], syllables: 1, startingLetter: "M" },

  // Additional Welsh
  { id: "214", name: "Anwen", gender: "girl", origin: "Welsh", meaning: "Very beautiful", pronunciation: "AN-wen", culturalContext: "A modern Welsh name combining 'an' (very) and 'gwen' (fair, blessed).", themes: ["Beauty", "Grace"], syllables: 2, startingLetter: "A" },

  // Additional Scottish
  { id: "215", name: "Lachlan", gender: "boy", origin: "Scottish", meaning: "From the land of lakes, warrior", pronunciation: "LAK-lan", culturalContext: "Originally referred to Viking settlers from Norway ('land of fjords').", themes: ["Nature", "Courage", "Water"], syllables: 2, startingLetter: "L" },

  // Additional German
  { id: "216", name: "Annika", gender: "girl", origin: "German", meaning: "Grace, favor", pronunciation: "AH-nee-kah", culturalContext: "A Scandinavian-German name; popularized by Pippi Longstocking's friend.", themes: ["Grace", "Joy", "Literary"], syllables: 3, startingLetter: "A" },

  // Additional Turkish
  { id: "217", name: "Aylin", gender: "girl", origin: "Turkish", meaning: "Moon halo", pronunciation: "eye-LEEN", culturalContext: "A poetic Turkish name describing the luminous ring around the moon.", themes: ["Stars", "Beauty", "Light"], syllables: 2, startingLetter: "A" },
  { id: "218", name: "Emir", gender: "boy", origin: "Turkish", meaning: "Commander, prince", pronunciation: "eh-MEER", culturalContext: "A title of authority in Ottoman and modern Turkish culture.", themes: ["Royalty", "Strength"], syllables: 2, startingLetter: "E" },

  // Additional Maori
  { id: "219", name: "Kaia", gender: "girl", origin: "Maori", meaning: "Food from the sea", pronunciation: "KAI-ah", culturalContext: "Reflects the Maori connection to the ocean as a source of sustenance.", themes: ["Water", "Nature", "Earth"], syllables: 2, startingLetter: "K" },

  // Additional Hawaiian
  { id: "220", name: "Keanu", gender: "boy", origin: "Hawaiian", meaning: "Cool breeze over the mountains", pronunciation: "kee-AH-noo", culturalContext: "Evokes the gentle Hawaiian trade winds; made famous by actor Keanu Reeves.", themes: ["Nature", "Peace", "Sky"], syllables: 3, startingLetter: "K" },
  { id: "221", name: "Alani", gender: "girl", origin: "Hawaiian", meaning: "Orange tree", pronunciation: "ah-LAH-nee", culturalContext: "A nature name celebrating the tropical beauty of the Hawaiian islands.", themes: ["Nature", "Beauty"], syllables: 3, startingLetter: "A" },

  // Additional Bengali
  { id: "222", name: "Anisha", gender: "girl", origin: "Bengali", meaning: "Unending, continuous", pronunciation: "ah-NEE-shah", culturalContext: "Symbolizes the eternal and infinite nature of life.", themes: ["Hope", "Light"], syllables: 3, startingLetter: "A" },
  { id: "223", name: "Arnav", gender: "boy", origin: "Bengali", meaning: "Ocean, sea", pronunciation: "AR-nav", culturalContext: "Evokes the vastness and depth of the ocean.", themes: ["Water", "Nature", "Strength"], syllables: 2, startingLetter: "A" },

  // Additional Amharic
  { id: "224", name: "Makeda", gender: "girl", origin: "Amharic", meaning: "Greatness, beautiful", pronunciation: "mah-KEH-dah", culturalContext: "The Ethiopian name for the Queen of Sheba, legendary for her wisdom.", themes: ["Royalty", "Wisdom", "Beauty"], syllables: 3, startingLetter: "M" },
  { id: "225", name: "Abebe", gender: "boy", origin: "Amharic", meaning: "Flower, he has blossomed", pronunciation: "ah-BEH-beh", culturalContext: "Made famous by Olympic champion Abebe Bikila; celebrates flourishing.", themes: ["Nature", "Joy", "Hope"], syllables: 3, startingLetter: "A" },

  // Additional Akan
  { id: "226", name: "Kofi", gender: "boy", origin: "Akan", meaning: "Born on Friday", pronunciation: "KOH-fee", culturalContext: "Made globally known by UN Secretary-General Kofi Annan; Friday-born are believed to be adventurous.", themes: ["Joy", "Wisdom"], syllables: 2, startingLetter: "K" },
  { id: "227", name: "Ama", gender: "girl", origin: "Akan", meaning: "Born on Saturday", pronunciation: "AH-mah", culturalContext: "Saturday-born girls in Akan tradition are believed to be patient and wise.", themes: ["Peace", "Wisdom"], syllables: 2, startingLetter: "A" },

  // Additional Zulu
  { id: "228", name: "Themba", gender: "boy", origin: "Zulu", meaning: "Hope, trust", pronunciation: "TEM-bah", culturalContext: "One of the most popular Zulu names, expressing hope for the future.", themes: ["Hope", "Faith"], syllables: 2, startingLetter: "T" },
  { id: "229", name: "Nomvula", gender: "girl", origin: "Zulu", meaning: "Born in the rain, mother of rain", pronunciation: "nom-VOO-lah", culturalContext: "Rain is a blessing in Zulu culture, making this a highly auspicious name.", themes: ["Nature", "Water", "Hope"], syllables: 3, startingLetter: "N" },

  // Additional nature/modern names
  { id: "230", name: "River", gender: "neutral", origin: "English", meaning: "Flowing body of water", pronunciation: "RIH-ver", culturalContext: "A modern nature name symbolizing flow, continuity, and the journey of life.", themes: ["Water", "Nature"], syllables: 2, startingLetter: "R" },
  { id: "231", name: "Phoenix", gender: "neutral", origin: "Greek", meaning: "Dark red, mythical bird reborn from ashes", pronunciation: "FEE-niks", culturalContext: "The mythical firebird that regenerates; symbolizes resilience and renewal.", themes: ["Fire", "Courage", "Hope", "Strength"], syllables: 2, startingLetter: "P" },
  { id: "232", name: "Eden", gender: "neutral", origin: "Hebrew", meaning: "Place of delight, paradise", pronunciation: "EE-den", culturalContext: "The Garden of Eden represents paradise and perfect harmony in Abrahamic traditions.", themes: ["Nature", "Peace", "Joy"], syllables: 2, startingLetter: "E" },
  { id: "233", name: "Sol", gender: "neutral", origin: "Spanish", meaning: "Sun", pronunciation: "SOHL", culturalContext: "The sun personified; used across Spanish and Portuguese-speaking cultures.", themes: ["Light", "Fire", "Nature"], syllables: 1, startingLetter: "S" },
  { id: "234", name: "Aster", gender: "neutral", origin: "Greek", meaning: "Star, star flower", pronunciation: "AS-ter", culturalContext: "Both a celestial reference and a late-blooming flower, symbolizing patience.", themes: ["Stars", "Nature", "Beauty"], syllables: 2, startingLetter: "A" },
  { id: "235", name: "Indigo", gender: "neutral", origin: "English", meaning: "Deep blue dye, Indian dye", pronunciation: "IN-dih-goh", culturalContext: "A color name evoking depth, creativity, and the rich history of the indigo trade.", themes: ["Beauty", "Earth"], syllables: 3, startingLetter: "I" },

  // Additional literary/musical
  { id: "236", name: "Isolde", gender: "girl", origin: "German", meaning: "Ice ruler, fair lady", pronunciation: "ih-ZOHL-deh", culturalContext: "The heroine of 'Tristan and Isolde,' one of the great medieval love stories.", themes: ["Love", "Literary", "Beauty"], syllables: 3, startingLetter: "I" },
  { id: "237", name: "Oberon", gender: "boy", origin: "English", meaning: "Noble, bear-like", pronunciation: "OH-beh-ron", culturalContext: "The fairy king in Shakespeare's 'A Midsummer Night's Dream.'", themes: ["Royalty", "Literary", "Nature"], syllables: 3, startingLetter: "O" },
  { id: "238", name: "Cordelia", gender: "girl", origin: "English", meaning: "Heart, daughter of the sea", pronunciation: "kor-DEE-lee-ah", culturalContext: "The virtuous youngest daughter in Shakespeare's 'King Lear.'", themes: ["Love", "Literary", "Grace"], syllables: 4, startingLetter: "C" },
  { id: "239", name: "Dorian", gender: "boy", origin: "Greek", meaning: "Of Doris, from the sea", pronunciation: "DOR-ee-an", culturalContext: "Made literary by Oscar Wilde's 'The Picture of Dorian Gray.'", themes: ["Literary", "Beauty", "Water"], syllables: 3, startingLetter: "D" },

  // Additional strength/courage names
  { id: "240", name: "Valentino", gender: "boy", origin: "Italian", meaning: "Strong, vigorous, healthy", pronunciation: "vah-len-TEE-noh", culturalContext: "Associated with romance (St. Valentine) and Italian style.", themes: ["Love", "Strength"], syllables: 4, startingLetter: "V" },
  { id: "241", name: "Brianna", gender: "girl", origin: "Irish", meaning: "Strong, noble, virtuous", pronunciation: "bree-AH-nah", culturalContext: "The feminine form of Brian, meaning 'noble strength.'", themes: ["Strength", "Grace", "Courage"], syllables: 3, startingLetter: "B" },
  { id: "242", name: "Ethan", gender: "boy", origin: "Hebrew", meaning: "Strong, firm, enduring", pronunciation: "EE-than", culturalContext: "A biblical name that has become one of the most popular in the English-speaking world.", themes: ["Strength", "Wisdom"], syllables: 2, startingLetter: "E" },

  // Additional peaceful names
  { id: "243", name: "Shanti", gender: "girl", origin: "Sanskrit", meaning: "Peace, tranquility", pronunciation: "SHAHN-tee", culturalContext: "The Sanskrit word for peace, chanted in Hindu and Buddhist prayers.", themes: ["Peace", "Grace", "Faith"], syllables: 2, startingLetter: "S" },
  { id: "244", name: "Pax", gender: "neutral", origin: "Latin", meaning: "Peace", pronunciation: "PAKS", culturalContext: "The Roman goddess of peace; a powerful single-syllable name.", themes: ["Peace"], syllables: 1, startingLetter: "P" },
  { id: "245", name: "Irene", gender: "girl", origin: "Greek", meaning: "Peace", pronunciation: "eye-REE-nee", culturalContext: "The Greek goddess of peace and one of the Horae (Hours).", themes: ["Peace", "Grace", "Light"], syllables: 3, startingLetter: "I" },

  // Additional sky/star names
  { id: "246", name: "Estelle", gender: "girl", origin: "French", meaning: "Star", pronunciation: "es-TEL", culturalContext: "The French form of Stella; evokes the romantic French night sky.", themes: ["Stars", "Beauty"], syllables: 2, startingLetter: "E" },
  { id: "247", name: "Altair", gender: "boy", origin: "Arabic", meaning: "The flying eagle, brightest star", pronunciation: "al-TAIR", culturalContext: "The brightest star in the Aquila constellation; a name that reaches for the sky.", themes: ["Stars", "Sky", "Courage"], syllables: 2, startingLetter: "A" },
  { id: "248", name: "Seren", gender: "girl", origin: "Welsh", meaning: "Star", pronunciation: "SEH-ren", culturalContext: "A popular modern Welsh name meaning star; gentle and luminous.", themes: ["Stars", "Light", "Beauty"], syllables: 2, startingLetter: "S" },

  // Additional water names
  { id: "249", name: "Marina", gender: "girl", origin: "Latin", meaning: "Of the sea", pronunciation: "mah-REE-nah", culturalContext: "Derived from the Latin 'marinus'; connected to the sea across Mediterranean cultures.", themes: ["Water", "Nature", "Beauty"], syllables: 3, startingLetter: "M" },
  { id: "250", name: "Dylan", gender: "boy", origin: "Welsh", meaning: "Son of the sea, great tide", pronunciation: "DIL-an", culturalContext: "In Welsh mythology, Dylan was a sea god. Also associated with poet Dylan Thomas.", themes: ["Water", "Nature", "Literary"], syllables: 2, startingLetter: "D" },
  { id: "251", name: "Nerida", gender: "girl", origin: "Greek", meaning: "Sea nymph, mermaid", pronunciation: "neh-REE-dah", culturalContext: "From the Nereids, the fifty sea nymphs of Greek mythology.", themes: ["Water", "Beauty", "Nature"], syllables: 3, startingLetter: "N" },

  // Additional fire/light
  { id: "252", name: "Elio", gender: "boy", origin: "Italian", meaning: "Sun", pronunciation: "EH-lee-oh", culturalContext: "The Italian form of Helios, the Greek sun god.", themes: ["Light", "Fire"], syllables: 3, startingLetter: "E" },
  { id: "253", name: "Ciara", gender: "girl", origin: "Irish", meaning: "Dark-haired, black", pronunciation: "KEER-ah", culturalContext: "The feminine of Ciaran; Saint Ciara was a 7th-century Irish abbess.", themes: ["Beauty", "Faith"], syllables: 2, startingLetter: "C" },

  // Additional earth/nature
  { id: "254", name: "Sylvan", gender: "boy", origin: "Latin", meaning: "Of the forest", pronunciation: "SIL-van", culturalContext: "From Silvanus, the Roman god of forests and fields.", themes: ["Nature", "Earth"], syllables: 2, startingLetter: "S" },
  { id: "255", name: "Terra", gender: "girl", origin: "Latin", meaning: "Earth", pronunciation: "TEH-rah", culturalContext: "The Roman personification of the Earth; a name grounding and powerful.", themes: ["Earth", "Nature", "Strength"], syllables: 2, startingLetter: "T" },

  // Additional wisdom names
  { id: "256", name: "Minerva", gender: "girl", origin: "Latin", meaning: "Wisdom, intellect", pronunciation: "mih-NER-vah", culturalContext: "The Roman goddess of wisdom, strategic warfare, and the arts.", themes: ["Wisdom", "Strength", "Courage"], syllables: 3, startingLetter: "M" },
  { id: "257", name: "Solomon", gender: "boy", origin: "Hebrew", meaning: "Peace, wisdom", pronunciation: "SOL-oh-mon", culturalContext: "The wisest king in biblical tradition, renowned for his just judgments.", themes: ["Wisdom", "Peace", "Royalty"], syllables: 3, startingLetter: "S" },

  // Additional joy names
  { id: "258", name: "Beatrix", gender: "girl", origin: "Latin", meaning: "She who brings happiness, blessed", pronunciation: "BEE-ah-triks", culturalContext: "Associated with Dante's muse Beatrice and author Beatrix Potter.", themes: ["Joy", "Literary", "Grace"], syllables: 3, startingLetter: "B" },
  { id: "259", name: "Isaac", gender: "boy", origin: "Hebrew", meaning: "He will laugh, laughter", pronunciation: "EYE-zak", culturalContext: "The biblical patriarch whose name celebrates the joy and laughter of new life.", themes: ["Joy", "Faith"], syllables: 2, startingLetter: "I" },

  // Additional love names
  { id: "260", name: "Amara", gender: "girl", origin: "Igbo", meaning: "Grace, mercy, kindness", pronunciation: "ah-MAH-rah", culturalContext: "Used across West African cultures; also means 'eternal' in Sanskrit.", themes: ["Grace", "Love", "Beauty"], syllables: 3, startingLetter: "A" },
  { id: "261", name: "Habib", gender: "boy", origin: "Arabic", meaning: "Beloved, darling", pronunciation: "hah-BEEB", culturalContext: "One of the 99 names of God in Islam (Al-Habib); expresses deep love.", themes: ["Love", "Faith"], syllables: 2, startingLetter: "H" },

  // Additional royal names
  { id: "262", name: "Malik", gender: "boy", origin: "Arabic", meaning: "King, sovereign", pronunciation: "MAH-lik", culturalContext: "One of the names of God in Islam; denotes sovereignty and authority.", themes: ["Royalty", "Strength"], syllables: 2, startingLetter: "M" },
  { id: "263", name: "Reina", gender: "girl", origin: "Spanish", meaning: "Queen", pronunciation: "RAY-nah", culturalContext: "The Spanish word for queen; a name of elegance and authority.", themes: ["Royalty", "Beauty", "Strength"], syllables: 2, startingLetter: "R" },

  // Additional grace/beauty
  { id: "264", name: "Adeline", gender: "girl", origin: "French", meaning: "Noble, nobility", pronunciation: "AD-eh-leen", culturalContext: "A French classic evoking timeless grace and aristocratic elegance.", themes: ["Grace", "Beauty", "Royalty"], syllables: 3, startingLetter: "A" },
  { id: "265", name: "Raphael", gender: "boy", origin: "Hebrew", meaning: "God has healed", pronunciation: "RAH-fah-el", culturalContext: "The archangel of healing; also the great Renaissance painter.", themes: ["Faith", "Hope", "Grace"], syllables: 3, startingLetter: "R" },

  // Additional courage
  { id: "266", name: "Oscar", gender: "boy", origin: "Irish", meaning: "God's spear, deer lover", pronunciation: "OS-kar", culturalContext: "From Irish mythology; Oscar was the grandson of the legendary Finn MacCool.", themes: ["Courage", "Strength", "Literary"], syllables: 2, startingLetter: "O" },
  { id: "267", name: "Matilda", gender: "girl", origin: "German", meaning: "Mighty in battle", pronunciation: "mah-TIL-dah", culturalContext: "Borne by queens and empresses; also Roald Dahl's beloved literary heroine.", themes: ["Strength", "Courage", "Literary"], syllables: 3, startingLetter: "M" },

  // Additional hope
  { id: "268", name: "Nadira", gender: "girl", origin: "Arabic", meaning: "Rare, precious", pronunciation: "nah-DEE-rah", culturalContext: "Describes something extraordinarily precious and unique.", themes: ["Beauty", "Hope"], syllables: 3, startingLetter: "N" },
  { id: "269", name: "Asahi", gender: "boy", origin: "Japanese", meaning: "Morning sun", pronunciation: "ah-SAH-hee", culturalContext: "Evokes the rising sun, symbol of Japan itself and new beginnings.", themes: ["Light", "Hope", "Nature"], syllables: 3, startingLetter: "A" },

  // Additional music names
  { id: "270", name: "Cadence", gender: "girl", origin: "English", meaning: "Rhythm, flow of sounds", pronunciation: "KAY-dens", culturalContext: "A musical term for the sequence of notes or chords; evokes harmony.", themes: ["Music", "Grace"], syllables: 2, startingLetter: "C" },

  // Additional faith names
  { id: "271", name: "Emmanuel", gender: "boy", origin: "Hebrew", meaning: "God is with us", pronunciation: "eh-MAN-yoo-el", culturalContext: "A profoundly spiritual name used across Christian and Jewish traditions.", themes: ["Faith", "Hope", "Love"], syllables: 4, startingLetter: "E" },
  { id: "272", name: "Fatima", gender: "girl", origin: "Arabic", meaning: "Captivating, one who abstains", pronunciation: "FAH-tee-mah", culturalContext: "Named after Fatimah, daughter of Prophet Muhammad, one of the most revered women in Islam.", themes: ["Faith", "Grace", "Love"], syllables: 3, startingLetter: "F" },

  // Fill remaining to ~300
  { id: "273", name: "Sebastian", gender: "boy", origin: "Latin", meaning: "Venerable, revered", pronunciation: "seh-BAS-tee-an", culturalContext: "A saint's name with regal bearing; popular across European cultures.", themes: ["Grace", "Faith"], syllables: 4, startingLetter: "S" },
  { id: "274", name: "Genevieve", gender: "girl", origin: "French", meaning: "Tribe woman, white wave", pronunciation: "ZHEN-eh-veev", culturalContext: "The patron saint of Paris who rallied the city's defense in the 5th century.", themes: ["Courage", "Grace", "Faith"], syllables: 3, startingLetter: "G" },
  { id: "275", name: "Jasmine", gender: "girl", origin: "Persian", meaning: "Gift from God, jasmine flower", pronunciation: "JAZ-min", culturalContext: "The fragrant jasmine flower is revered across Persian, Arabic, and South Asian cultures.", themes: ["Nature", "Beauty", "Grace"], syllables: 2, startingLetter: "J" },
  { id: "276", name: "Adrian", gender: "boy", origin: "Latin", meaning: "From Hadria, dark one", pronunciation: "AY-dree-an", culturalContext: "Named after the Adriatic Sea; borne by a Roman emperor and multiple popes.", themes: ["Strength", "Water"], syllables: 3, startingLetter: "A" },
  { id: "277", name: "Naomi", gender: "girl", origin: "Hebrew", meaning: "Pleasantness, delight", pronunciation: "nay-OH-mee", culturalContext: "A biblical name symbolizing joy; Naomi was Ruth's mother-in-law.", themes: ["Joy", "Love", "Grace"], syllables: 3, startingLetter: "N" },
  { id: "278", name: "Gabriel", gender: "boy", origin: "Hebrew", meaning: "God is my strength", pronunciation: "GAY-bree-el", culturalContext: "The archangel who announced the births of Jesus and John; messenger of God.", themes: ["Faith", "Strength", "Hope"], syllables: 3, startingLetter: "G" },
  { id: "279", name: "Zara", gender: "girl", origin: "Arabic", meaning: "Princess, flower, dawn", pronunciation: "ZAH-rah", culturalContext: "A name used from Morocco to South Asia, carrying royal and floral meanings.", themes: ["Royalty", "Beauty", "Nature"], syllables: 2, startingLetter: "Z" },
  { id: "280", name: "Elijah", gender: "boy", origin: "Hebrew", meaning: "My God is Yahweh", pronunciation: "eh-LY-jah", culturalContext: "One of the greatest prophets in the Hebrew Bible, associated with miracles.", themes: ["Faith", "Strength", "Courage"], syllables: 3, startingLetter: "E" },
  { id: "281", name: "Nadia", gender: "girl", origin: "Slavic", meaning: "Hope", pronunciation: "NAH-dee-ah", culturalContext: "From the Russian 'nadezhda' (hope); widely used across Eastern Europe and the Middle East.", themes: ["Hope", "Grace"], syllables: 3, startingLetter: "N" },
  { id: "282", name: "Hassan", gender: "boy", origin: "Arabic", meaning: "Handsome, good, beautiful", pronunciation: "hah-SAHN", culturalContext: "The grandson of Prophet Muhammad; a name signifying beauty and goodness.", themes: ["Beauty", "Grace", "Faith"], syllables: 2, startingLetter: "H" },
  { id: "283", name: "Esme", gender: "girl", origin: "French", meaning: "Esteemed, beloved", pronunciation: "EZ-may", culturalContext: "A French name of Persian origin meaning 'beloved'; carries literary charm.", themes: ["Love", "Beauty", "Literary"], syllables: 2, startingLetter: "E" },
  { id: "284", name: "Aadhya", gender: "girl", origin: "Sanskrit", meaning: "The beginning, first power", pronunciation: "AHD-yah", culturalContext: "Another name for Goddess Durga; represents the first power of creation.", themes: ["Strength", "Faith", "Grace"], syllables: 2, startingLetter: "A" },
  { id: "285", name: "Kolade", gender: "boy", origin: "Yoruba", meaning: "Brings honor home", pronunciation: "koh-LAH-deh", culturalContext: "A name expressing the hope that the child will bring glory to the family.", themes: ["Royalty", "Hope"], syllables: 3, startingLetter: "K" },
  { id: "286", name: "Anika", gender: "girl", origin: "Hindi", meaning: "Grace, splendor", pronunciation: "AH-nih-kah", culturalContext: "An epithet of Goddess Durga; also popular in Scandinavian culture.", themes: ["Grace", "Beauty", "Strength"], syllables: 3, startingLetter: "A" },
  { id: "287", name: "Idara", gender: "girl", origin: "Igbo", meaning: "Vision, knowledge", pronunciation: "ee-DAH-rah", culturalContext: "An Igbo name celebrating clarity of vision and understanding.", themes: ["Wisdom", "Light"], syllables: 3, startingLetter: "I" },
  { id: "288", name: "Takumi", gender: "boy", origin: "Japanese", meaning: "Artisan, skillful", pronunciation: "tah-KOO-mee", culturalContext: "Celebrates Japanese craftsmanship tradition and the pursuit of mastery.", themes: ["Wisdom", "Strength"], syllables: 3, startingLetter: "T" },
  { id: "289", name: "Liora", gender: "girl", origin: "Hebrew", meaning: "My light", pronunciation: "lee-OR-ah", culturalContext: "A modern Hebrew name expressing the joy a child brings as a light in one's life.", themes: ["Light", "Love", "Joy"], syllables: 3, startingLetter: "L" },
  { id: "290", name: "Omari", gender: "boy", origin: "Swahili", meaning: "God the highest, flourishing", pronunciation: "oh-MAH-ree", culturalContext: "A Swahili name with Arabic roots, expressing divine blessing.", themes: ["Faith", "Strength"], syllables: 3, startingLetter: "O" },
  { id: "291", name: "Soraya", gender: "girl", origin: "Persian", meaning: "The Pleiades, jewel", pronunciation: "soh-RAH-yah", culturalContext: "Named after the Pleiades star cluster; borne by an Iranian empress.", themes: ["Stars", "Beauty", "Royalty"], syllables: 3, startingLetter: "S" },
  { id: "292", name: "Obi", gender: "boy", origin: "Igbo", meaning: "Heart, mind", pronunciation: "OH-bee", culturalContext: "A short but profound Igbo name meaning 'heart' — the center of being.", themes: ["Love", "Wisdom"], syllables: 2, startingLetter: "O" },
  { id: "293", name: "Yara", gender: "girl", origin: "Arabic", meaning: "Small butterfly, friend", pronunciation: "YAH-rah", culturalContext: "Also a water spirit in Brazilian mythology; carries cross-cultural beauty.", themes: ["Nature", "Beauty", "Love"], syllables: 2, startingLetter: "Y" },
  { id: "294", name: "Kai-zen", gender: "boy", origin: "Japanese", meaning: "Continuous improvement", pronunciation: "KAI-zen", culturalContext: "The Japanese philosophy of continuous self-improvement and growth.", themes: ["Wisdom", "Hope", "Strength"], syllables: 2, startingLetter: "K" },
  { id: "295", name: "Ximena", gender: "girl", origin: "Spanish", meaning: "One who has heard", pronunciation: "hee-MEH-nah", culturalContext: "A popular modern Spanish name with medieval roots; associated with listening and understanding.", themes: ["Wisdom", "Grace"], syllables: 3, startingLetter: "X" },
  { id: "296", name: "Zion", gender: "neutral", origin: "Hebrew", meaning: "Highest point, promised land", pronunciation: "ZY-on", culturalContext: "A biblical name representing the promised land and ultimate aspiration.", themes: ["Faith", "Hope", "Strength"], syllables: 2, startingLetter: "Z" },
  { id: "297", name: "Chioma", gender: "girl", origin: "Igbo", meaning: "Good God, God is good", pronunciation: "chee-OH-mah", culturalContext: "A widely beloved Igbo name celebrating divine goodness.", themes: ["Faith", "Joy", "Grace"], syllables: 3, startingLetter: "C" },
  { id: "298", name: "Ravi", gender: "boy", origin: "Hindi", meaning: "Sun", pronunciation: "RAH-vee", culturalContext: "Named after the sun; also a classical raga in Indian music tradition.", themes: ["Light", "Fire", "Music"], syllables: 2, startingLetter: "R" },
  { id: "299", name: "Kiana", gender: "girl", origin: "Hawaiian", meaning: "Divine, heavenly", pronunciation: "kee-AH-nah", culturalContext: "A Hawaiian name meaning 'heavenly'; also used in Persian culture.", themes: ["Grace", "Beauty", "Sky"], syllables: 3, startingLetter: "K" },
  { id: "300", name: "Otis", gender: "boy", origin: "German", meaning: "Wealthy, prosperous", pronunciation: "OH-tis", culturalContext: "Made legendary by soul singer Otis Redding; carries musical soul.", themes: ["Music", "Joy"], syllables: 2, startingLetter: "O" },
];
