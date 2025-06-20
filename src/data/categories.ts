export type Category = {
    name: string;
    years: Record<number, string>;
};

const categories = [
    {
        name: 'Кино',
        years: {
            1965: '«Звуки музыки»/The Sound of Music, США (реж. Роберт Уайз)',
            1967: '«Выпускник»/The Graduate, США (реж. Майк Николс)',
            1972: '«Крёстный отец»/The Godfather, США (реж. Фрэнсис Форд Коппола)',
            1975: "«Пролетая над гнездом кукушки»/One Flew Over the Cuckoo's Nest, США (реж. Милош Форман)",
        },
    },
    {
        name: 'Кино',
        years: {
            1987: '«Хищник»/Predator, США (реж. Джон Мактирнан)',
            1988: '«Кто подставил кролика Роджера»/Who Framed Roger Rabbit, США (реж. Роберт Земекис)',
            1989: '«Назад в будущее 2»/Back To The Future 2, США (реж. Роберт Земекис)',
            1990: '«Крепкий орешек»/Die Hard, США (реж. Джон Мактирнан)',
            1991: '«Семейка Аддамс»/The Addams Family, США, (реж. Барри Зонненфельд)',
        },
    },
    {
        name: 'Литература',
        years: {
            1992: 'Нобелевская премия по литературе — Дерек Уолкотт, «За блестящий образец карибского эпоса в 64 разделах».',
            1994: '«Бессонница» — роман Стивена Кинга.',
            1995: 'Нобелевская премия по литературе — Шеймас Хини',
            1997: 'Гарри Поттер и философский камень — роман Джоан Роулинг',
        },
    },
    {
        name: '',
        years: {
            1999: 'премьера балета «Золушка» в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона',
            2000: 'возобновлено издание журнала «Театр».',
            2002: 'премьера трилогии Тома Стоппарда «Берег Утопии», Королевский Национальный театр, Лондон',
            2003: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            2004: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    },
    {
        name: 'Test',
        years: {
            2005: 'премьера балета «Золушка» в постановке Жан-Кристофа Майо, сценография Эрнеста Пиньона',
            2006: 'возобновлено издание журнала «Театр».',
            2007: 'премьера трилогии Тома Стоппарда «Берег Утопии», Королевский Национальный театр, Лондон',
            2012: 'lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    },
    {
        name: 'Наука',
        years: {
            2015: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
            2016: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик',
            2017: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
            2018: 'Старт космического аппарата Solar Probe Plus, предназначенного для изучения Солнца',
            2019: 'Google объявил о создании 53-кубитного квантового компьютера.',
            2020: 'Корабль Crew Dragon вернулся на Землю из первого пилотируемого полёта',
            2021: 'Lorem ipsum',
            2022: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    },
] as const satisfies Category[];

export default categories;
