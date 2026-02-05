import { NavItem, SlideData, ValueItem, MenuCategory } from './types';
import { Axe, Flame, UtensilsCrossed } from 'lucide-react';
import React from 'react';

export const NAV_ITEMS: NavItem[] = [
  { label: 'MENU', href: '#menu' },
  { label: 'O NAS', href: '#about' },
  { label: 'LOKALE', href: '#locations' },
  { label: 'KONTAKT', href: '#contact' },
];

export const SLIDES: SlideData[] = [
  {
    id: 0,
    title: 'Drwal u Ciebie W Domu',
    highlight: 'W Domu',
    description: 'Nie chce Ci się wychodzić? Odpalasz telefon, wybierasz co chcesz, a my dowieziemy Ci gorące mięso i chrupiące frytki pod same drzwi.',
    image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1200&auto=format&fit=crop',
    bgColor: 'bg-drwal-dark',
    textColor: 'text-white',
    theme: 'dark',
    buttons: [
      { label: 'Zamów Online', href: '#menu', variant: 'primary' },
      { label: 'Lokal', href: '#locations', variant: 'outline' }
    ]
  },
  {
    id: 1,
    title: 'Wszystko Zaczęło Się w Lesie.',
    description: 'Jedna budka, siekiera i marzenie o prawdziwym mięsie. Żadnych wiórów, tylko konkretny wsad. Kebab Drwal to hołd dla prostoty i siły smaku.',
    image: 'https://images.unsplash.com/photo-1605204097479-72c1c7379203?q=80&w=1200&auto=format&fit=crop',
    bgColor: 'bg-white',
    textColor: 'text-drwal-dark',
    theme: 'light'
  },
  {
    id: 2,
    title: 'Kolejki Rosły, Porcje Też.',
    description: 'Okazało się, że ludzie są głodni. Bardzo głodni. Zaczęliśmy serwować buły wielkości głowy i lawasze długie jak przedramię. Drwal nie bawi się w małe porcje.',
    image: 'https://images.unsplash.com/photo-1633321702518-7fe2bf4296f3?q=80&w=1200&auto=format&fit=crop',
    bgColor: 'bg-drwal-yellow',
    textColor: 'text-drwal-dark',
    theme: 'light'
  },
  {
    id: 3,
    title: 'Jakość Bez Kompromisów.',
    description: 'Sosy kręcimy sami na miejscu. Warzywa kroimy codziennie rano, by chrupały. A mięso? Marynujemy je według tajnej receptury. To nie fast food, to slow food podany szybko.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1200&auto=format&fit=crop',
    bgColor: 'bg-drwal-red',
    textColor: 'text-white',
    theme: 'dark'
  }
];

export const VALUES: ValueItem[] = [
  {
    icon: <Flame className="w-10 h-10" />,
    title: "Smak z Charakterem",
    description: "Nie jesteśmy tu, żeby łaskotać podniebienia. Nasze sosy palą, a przyprawy mają moc. Każdy kęs to uderzenie siekierą smaku.",
    color: 'red'
  },
  {
    icon: <Axe className="w-10 h-10" />,
    title: "Rozmiar Drwala",
    description: "Budujemy kebaby dla ludzi, którzy ciężko pracują (lub ciężko imprezują). Najesz się do syta, albo oddamy Ci pieniądze.",
    color: 'yellow'
  },
  {
    icon: <UtensilsCrossed className="w-10 h-10" />,
    title: "Świeżość Lasu",
    description: "Mięso: kraftowe. Warzywa: chrupiące. Sosy: kręcone codziennie rano. Żadnej chemii, sama natura i ostre cięcie.",
    color: 'green'
  }
];

// --- MENU DATA ---

export const MENU_BESTSELLERS: MenuCategory = {
  title: "Nasze Bestsellery",
  description: "Jeśli masz 5 sekund na decyzję.",
  items: [
    {
      id: "b1",
      name: "Pita Drwala",
      price: "44 zł",
      description: "Mięso + frytki + ser panierowany + bekon + cheddar + warzywa i sosy.",
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop",
      tag: "TOP"
    },
    {
      id: "b2",
      name: "Bułka Drwala",
      price: "44 zł",
      description: "Mięso, sos, cheddar, bekon, warzywa. Klasyk, który zawsze siada.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "b3",
      name: "Rollo Drwala",
      price: "43 zł",
      description: "Konkret w tortilli: ser panierowany, cheddar, bekon, warzywa, sosy.",
      image: "https://images.unsplash.com/photo-1561651823-34febf224567?q=80&w=800&auto=format&fit=crop",
    },
    {
      id: "b4",
      name: "Talerz Drwala",
      price: "45 zł",
      description: "Mięso + panierowane frytki + cheddar + bekon + warzywa.",
      image: "https://images.unsplash.com/photo-1544025162-d76690b67f61?q=80&w=800&auto=format&fit=crop",
      tag: "MEGA"
    }
  ]
};

export const MENU_FOREST: MenuCategory = {
  title: "Leśne Drwale",
  description: "Dla fanów trufli i wykwintnych smaków.",
  items: [
    {
      id: "f1",
      name: "Leśny Talerz Drwala",
      price: "49 zł",
      description: "Autorski sos truflowy, pieczarki, chrupiące ziemniaki ze skórką, cheddar i bekon.",
      image: "https://images.unsplash.com/photo-1603064752734-4c48eff53d05?q=80&w=800&auto=format&fit=crop",
      tag: "TRUFLA"
    },
    {
      id: "f2",
      name: "Leśna Bułka Drwala",
      price: "48 zł",
      description: "Trufla + frytki + pieczarki + cheddar + bekon. Totalny game changer.",
      image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop",
    }
  ]
};

export const MENU_FIT: MenuCategory = {
  title: "Fit Food",
  description: "Lżej, ale dalej konkretnie. Wersje dla sportowców.",
  items: [
    {
      id: "fit1",
      name: "Kurczak Rollo Fit",
      price: "29 zł",
      description: "Pełnoziarnista tortilla, chrupiące warzywa, grillowany kurczak, autorski fit sos.",
      image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop",
      macros: {
        calories: "450",
        protein: "35g",
        carbs: "45g",
        fat: "12g"
      }
    },
    {
      id: "fit2",
      name: "Micha Drwala",
      price: "44 zł",
      description: "Kurczak 300g, warzywa, ryż, fit sos. Opcjonalnie oliwki, feta lub jalapeño.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
      macros: {
        calories: "580",
        protein: "65g",
        carbs: "50g",
        fat: "18g"
      }
    },
    {
      id: "fit3",
      name: "Sałatka z Kurczakiem",
      price: "30 zł",
      description: "Świeże warzywa, oliwki, feta, grillowany kurczak, fit sos.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
      macros: {
        calories: "320",
        protein: "30g",
        carbs: "12g",
        fat: "15g"
      }
    }
  ]
};

export const MENU_FORMS: MenuCategory = {
    title: "Wybierz Formę",
    items: [
        { id: "form1", name: "Rollo", description: "L / XL / XXL (Wołowina / Kurczak / Mix / Vege)" },
        { id: "form2", name: "Bułka", description: "L / XL (Wołowina / Kurczak / Mix / Vege)" },
        { id: "form3", name: "Pita", description: "Wołowina / Kurczak / Mix / Vege" },
        { id: "form4", name: "Talerz", description: "XL (Zestaw obiadowy)" },
        { id: "form5", name: "Box", description: "L / XL / XXL (Mięso + Frytki)" },
    ]
}

export const MENU_SIDES: MenuCategory = {
    title: "Dodatki & Frytki",
    items: [
        { id: "side1", name: "Frytki Drwala", price: "23 zł", description: "Karbowane, z cheddarem i bekonem." },
        { id: "side2", name: "Łódeczki Drwala", price: "23 zł", description: "Ziemniaki ze skórką + cheddar + bekon." },
        { id: "side3", name: "Mega Party Box", price: "164 zł", description: "Nuggetsy, pops, krążki cebulowe, mięso, rollo bites, frytki Drwala." },
    ]
}