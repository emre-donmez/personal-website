export interface Drink {
  id: string;
  name: string;
  description: string;
  icon: string;
  ingredients: string[];
  coffeeGrams?: string;
  espressoShot?: string;
  milkRatio?: string;
  preparationSteps: string[];
  servingSuggestion?: string;
}

export interface DrinkCategory {
  id: string;
  name: string;
  icon: string;
  drinks: Drink[];
}

export const menuData: DrinkCategory[] = [
  {
    id: 'espresso-based',
    name: 'Espresso Bazlı Kahveler',
    icon: '☕',
    drinks: [
      {
        id: 'espresso',
        name: 'Espresso',
        description: 'Yoğun ve aromalı, saf kahve keyfi.',
        icon: '☕',
        ingredients: ['Espresso kahve çekirdeği', 'Su'],
        coffeeGrams: '18-20g',
        espressoShot: 'Double shot',
        preparationSteps: [
          'Kahveyi ince öğüt.',
          'Portafiltreye yerleştir ve tamperla.',
          '25-30 saniye arasında ~40ml espresso çek.',
        ],
        servingSuggestion: 'Önceden ısıtılmış espresso fincanında servis et.',
      },
      {
        id: 'americano',
        name: 'Americano',
        description: 'Espresso ve sıcak su ile hafif ve uzun bir kahve.',
        icon: '🫗',
        ingredients: ['Espresso', 'Sıcak su'],
        coffeeGrams: '18-20g',
        espressoShot: 'Double shot',
        milkRatio: 'Süt yok — 1 kısım espresso, 2 kısım sıcak su',
        preparationSteps: [
          'Double shot espresso çek.',
          'Bardağa ~160ml sıcak su ekle.',
          'Espressoyu suyun üzerine yavaşça dök.',
        ],
        servingSuggestion: 'Büyük bardakta, yanında su ile servis et.',
      },
      {
        id: 'latte',
        name: 'Latte',
        description: 'Bol süt, hafif köpük ve yumuşak kahve lezzeti.',
        icon: '🥛',
        ingredients: ['Espresso', 'Süt'],
        coffeeGrams: '18-20g',
        espressoShot: 'Double shot',
        milkRatio: '1 kısım espresso, 3 kısım buğulanmış süt, ince köpük',
        preparationSteps: [
          'Double shot espresso çek.',
          'Sütü buğula (60-65°C), ince ve kadifemsi köpük elde et.',
          'Espressonun üzerine sütü yavaşça dök.',
        ],
        servingSuggestion: 'Latte bardağında servis et.',
      },
      {
        id: 'cappuccino',
        name: 'Cappuccino',
        description: 'Eşit oranda espresso, süt ve yoğun köpük.',
        icon: '☕',
        ingredients: ['Espresso', 'Süt'],
        coffeeGrams: '18-20g',
        espressoShot: 'Double shot',
        milkRatio: '1/3 espresso, 1/3 buğulanmış süt, 1/3 köpük',
        preparationSteps: [
          'Double shot espresso çek.',
          'Sütü buğula (60-65°C), yoğun ve kalın köpük elde et.',
          'Espressonun üzerine sütü ve köpüğü dök.',
        ],
        servingSuggestion: 'Cappuccino fincanında, üzerine isteğe göre tarçın serperek servis et.',
      },
      {
        id: 'flat-white',
        name: 'Flat White',
        description: 'Yoğun espresso ve kadifemsi mikro köpüklü süt.',
        icon: '🤍',
        ingredients: ['Espresso', 'Süt'],
        coffeeGrams: '18-20g',
        espressoShot: 'Double shot',
        milkRatio: '1 kısım espresso, 2 kısım mikro köpüklü süt',
        preparationSteps: [
          'Double shot espresso çek.',
          'Sütü buğula (60-65°C), çok ince mikro köpük oluştur.',
          'Sütü espressonun üzerine dökerek karıştır.',
        ],
        servingSuggestion: 'Küçük latte bardağında servis et.',
      },
      {
        id: 'mocha',
        name: 'Mocha',
        description: 'Çikolata ve espressonun lezzetli buluşması.',
        icon: '🍫',
        ingredients: ['Espresso', 'Süt', 'Çikolata sosu'],
        coffeeGrams: '18-20g',
        espressoShot: 'Double shot',
        milkRatio: '1 kısım espresso, 2 kısım buğulanmış süt, 1-2 yemek kaşığı çikolata sosu',
        preparationSteps: [
          'Bardağa çikolata sosu ekle.',
          'Double shot espresso çek ve çikolata sosunun üzerine dök, karıştır.',
          'Buğulanmış sütü üzerine ekle.',
        ],
        servingSuggestion: 'Üzerine çikolata sosu gezdirerek servis et.',
      },
      {
        id: 'macchiato',
        name: 'Macchiato',
        description: 'Espressonun üzerine bir dokunuş süt köpüğü.',
        icon: '🔘',
        ingredients: ['Espresso', 'Süt köpüğü'],
        coffeeGrams: '18-20g',
        espressoShot: 'Double shot',
        milkRatio: 'Espresso + bir kaşık süt köpüğü',
        preparationSteps: [
          'Double shot espresso çek.',
          'Az miktarda sütü buğulayıp köpürt.',
          'Bir kaşık köpüğü espressonun üzerine koy.',
        ],
        servingSuggestion: 'Espresso fincanında servis et.',
      },
      {
        id: 'cortado',
        name: 'Cortado',
        description: 'Eşit oranda espresso ve buğulanmış süt, dengeli bir tat.',
        icon: '⚖️',
        ingredients: ['Espresso', 'Süt'],
        coffeeGrams: '18-20g',
        espressoShot: 'Double shot',
        milkRatio: '1:1 espresso ve buğulanmış süt',
        preparationSteps: [
          'Double shot espresso çek.',
          'Eşit miktarda sütü buğula (az köpük).',
          'Sütü espressonun üzerine dök.',
        ],
        servingSuggestion: 'Küçük cam bardakta servis et.',
      },
    ],
  },
  {
    id: 'traditional',
    name: 'Geleneksel / Sıcak İçecekler',
    icon: '🫖',
    drinks: [
      {
        id: 'turk-kahvesi',
        name: 'Türk Kahvesi',
        description: 'Geleneksel yöntemle pişirilen, köpüklü ve aromalı kahve.',
        icon: '☕',
        ingredients: ['Türk kahvesi', 'Su', 'İsteğe göre şeker'],
        coffeeGrams: '7-8g (1 fincan için)',
        preparationSteps: [
          'Cezveye bir fincan soğuk su koy.',
          'Kahveyi ve isteğe göre şekeri ekleyip karıştır.',
          'Kısık ateşte yavaşça pişir.',
          'Köpük yükselmeye başlayınca fincana az köpük al.',
          'Tekrar kaynat ve fincana dök.',
        ],
        servingSuggestion: 'Yanında bir bardak su ve lokum ile servis et.',
      },
      {
        id: 'cay',
        name: 'Çay',
        description: 'Klasik Türk çayı, demli ve sıcacık.',
        icon: '🍵',
        ingredients: ['Siyah çay', 'Su'],
        preparationSteps: [
          'Alt demliğe su koy ve kaynat.',
          'Üst demliğe çay koy.',
          'Kaynar suyu üst demliğe ekle.',
          'Kısık ateşte 10-15 dakika demle.',
          'İnce belli bardağa doldur.',
        ],
        servingSuggestion: 'İnce belli bardakta, yanında şeker ile servis et.',
      },
      {
        id: 'ihlamur',
        name: 'Ihlamur',
        description: 'Ferahlatıcı ve rahatlatıcı bir bitki çayı.',
        icon: '🌿',
        ingredients: ['Ihlamur', 'Su', 'İsteğe göre bal veya limon'],
        preparationSteps: [
          'Suyu kaynat.',
          'Ihlamuru demliğe veya bardağa koy.',
          'Kaynar suyu ekle, 5-7 dakika demle.',
          'Süz ve isteğe göre bal veya limon ekle.',
        ],
        servingSuggestion: 'Kupa bardakta, sıcak servis et.',
      },
    ],
  },
  {
    id: 'cold-drinks',
    name: 'Soğuk İçecekler',
    icon: '🧊',
    drinks: [
      {
        id: 'maden-suyu-soguk',
        name: 'Maden Suyu',
        description: 'Ferahlatıcı, soğuk maden suyu.',
        icon: '💧',
        ingredients: ['Maden suyu'],
        preparationSteps: ['Soğuk olarak servis et.'],
        servingSuggestion: 'Cam bardakta, isteğe göre limon dilimi ile servis et.',
      },
    ],
  },
  {
    id: 'other',
    name: 'Diğer',
    icon: '✨',
    drinks: [
      {
        id: 'maden-suyu-diger',
        name: 'Maden Suyu',
        description: 'Ferahlatıcı maden suyu.',
        icon: '💧',
        ingredients: ['Maden suyu'],
        preparationSteps: ['Soğuk veya oda sıcaklığında servis et.'],
        servingSuggestion: 'Cam bardakta servis et.',
      },
    ],
  },
];
