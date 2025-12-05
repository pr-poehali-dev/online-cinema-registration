import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const genres = [
    { id: 'all', name: 'Все' },
    { id: 'action', name: 'Боевик' },
    { id: 'comedy', name: 'Комедия' },
    { id: 'drama', name: 'Драма' },
    { id: 'scifi', name: 'Фантастика' },
    { id: 'thriller', name: 'Триллер' },
  ];

  const movies = [
    {
      id: 1,
      title: 'Космическая одиссея',
      genre: 'scifi',
      year: 2024,
      rating: 8.5,
      image: 'https://cdn.poehali.dev/projects/51bdbfe3-8e23-4471-a0c9-774658a960c9/files/a3576c6c-f94f-4ff8-ba72-44da72d94380.jpg',
      subscription: 'premium',
      isTrending: true,
    },
    {
      id: 2,
      title: 'Городские приключения',
      genre: 'comedy',
      year: 2024,
      rating: 7.8,
      image: 'https://cdn.poehali.dev/projects/51bdbfe3-8e23-4471-a0c9-774658a960c9/files/ec23d5e7-f693-4ffa-b865-8234647ec268.jpg',
      subscription: 'standard',
      isTrending: true,
    },
    {
      id: 3,
      title: 'Последняя надежда',
      genre: 'action',
      year: 2023,
      rating: 9.1,
      image: 'https://cdn.poehali.dev/projects/51bdbfe3-8e23-4471-a0c9-774658a960c9/files/e128ec3b-08f8-48d2-859d-3edc934962d4.jpg',
      subscription: 'basic',
      isTrending: true,
    },
    {
      id: 4,
      title: 'Тайны прошлого',
      genre: 'thriller',
      year: 2024,
      rating: 8.2,
      image: 'https://cdn.poehali.dev/projects/51bdbfe3-8e23-4471-a0c9-774658a960c9/files/e128ec3b-08f8-48d2-859d-3edc934962d4.jpg',
      subscription: 'standard',
      isTrending: false,
    },
    {
      id: 5,
      title: 'Романтика века',
      genre: 'drama',
      year: 2023,
      rating: 7.5,
      image: 'https://cdn.poehali.dev/projects/51bdbfe3-8e23-4471-a0c9-774658a960c9/files/ec23d5e7-f693-4ffa-b865-8234647ec268.jpg',
      subscription: 'basic',
      isTrending: false,
    },
    {
      id: 6,
      title: 'Звездные войны: Новая эра',
      genre: 'scifi',
      year: 2024,
      rating: 8.9,
      image: 'https://cdn.poehali.dev/projects/51bdbfe3-8e23-4471-a0c9-774658a960c9/files/a3576c6c-f94f-4ff8-ba72-44da72d94380.jpg',
      subscription: 'premium',
      isTrending: false,
    },
  ];

  const subscriptions = [
    {
      id: 'basic',
      name: 'Базовый',
      price: 299,
      color: 'from-blue-500 to-cyan-500',
      features: ['HD качество', '1 устройство', 'Основной каталог', 'Реклама'],
    },
    {
      id: 'standard',
      name: 'Стандарт',
      price: 599,
      color: 'from-purple-500 to-pink-500',
      features: ['Full HD качество', '2 устройства', 'Расширенный каталог', 'Без рекламы'],
      popular: true,
    },
    {
      id: 'premium',
      name: 'Премиум',
      price: 999,
      color: 'from-orange-500 to-red-500',
      features: ['4K Ultra HD', '4 устройства', 'Полный каталог + эксклюзивы', 'Ранний доступ'],
    },
  ];

  const filteredMovies = movies.filter((movie) => {
    const matchesGenre = selectedGenre === 'all' || movie.genre === selectedGenre;
    const matchesSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGenre && matchesSearch;
  });

  const savedMovies = movies.filter((_, index) => index % 2 === 0);
  const watchHistory = movies.filter((_, index) => index % 3 === 0);

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CineStream
              </h1>
              <div className="hidden md:flex gap-6">
                <button
                  onClick={() => setActiveTab('home')}
                  className={`text-sm font-medium transition-colors ${
                    activeTab === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Главная
                </button>
                <button
                  onClick={() => setActiveTab('catalog')}
                  className={`text-sm font-medium transition-colors ${
                    activeTab === 'catalog' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Каталог
                </button>
                <button
                  onClick={() => setActiveTab('subscriptions')}
                  className={`text-sm font-medium transition-colors ${
                    activeTab === 'subscriptions' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Подписки
                </button>
                <button
                  onClick={() => setActiveTab('profile')}
                  className={`text-sm font-medium transition-colors ${
                    activeTab === 'profile' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Профиль
                </button>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Search" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                onClick={() => navigate('/auth')}
              >
                Войти
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {activeTab === 'home' && (
        <div className="animate-fade-in">
          <div className="relative h-[600px] overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('https://cdn.poehali.dev/projects/51bdbfe3-8e23-4471-a0c9-774658a960c9/files/a3576c6c-f94f-4ff8-ba72-44da72d94380.jpg')`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            </div>
            <div className="relative container mx-auto px-4 h-full flex items-end pb-20">
              <div className="max-w-2xl">
                <Badge className="mb-4 bg-primary/20 text-primary border-primary/50">Новинка</Badge>
                <h2 className="text-5xl md:text-7xl font-bold mb-4">Космическая одиссея</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Эпическое путешествие к границам вселенной. Команда астронавтов отправляется на поиски новой
                  планеты для человечества.
                </p>
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={20} className="fill-yellow-500 text-yellow-500" />
                    <span className="font-semibold">8.5</span>
                  </div>
                  <span className="text-muted-foreground">2024</span>
                  <Badge variant="outline">Фантастика</Badge>
                </div>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    <Icon name="Play" size={20} className="mr-2" />
                    Смотреть
                  </Button>
                  <Button size="lg" variant="outline">
                    <Icon name="Plus" size={20} className="mr-2" />
                    В список
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-12">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">🔥 Сейчас в тренде</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {movies
                  .filter((m) => m.isTrending)
                  .map((movie) => (
                    <Card
                      key={movie.id}
                      className="group relative overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
                    >
                      <div className="aspect-[2/3] overflow-hidden">
                        <img
                          src={movie.image}
                          alt={movie.title}
                          className="w-full h-full object-cover transition-transform group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h4 className="font-semibold mb-2">{movie.title}</h4>
                          <div className="flex items-center gap-2 text-sm">
                            <div className="flex items-center gap-1">
                              <Icon name="Star" size={16} className="fill-yellow-500 text-yellow-500" />
                              <span>{movie.rating}</span>
                            </div>
                            <span className="text-muted-foreground">{movie.year}</span>
                          </div>
                        </div>
                      </div>
                      <Badge className="absolute top-2 right-2 bg-primary/90">
                        {movie.subscription === 'premium' ? '⭐ Premium' : movie.subscription === 'standard' ? '✨ Standard' : '📺 Basic'}
                      </Badge>
                    </Card>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'catalog' && (
        <div className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="mb-8">
            <h2 className="text-4xl font-bold mb-6">Каталог фильмов</h2>
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <Input
                placeholder="Поиск фильмов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="md:max-w-md"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {genres.map((genre) => (
                <Button
                  key={genre.id}
                  variant={selectedGenre === genre.id ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedGenre(genre.id)}
                  className={selectedGenre === genre.id ? 'bg-gradient-to-r from-primary to-secondary' : ''}
                >
                  {genre.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredMovies.map((movie) => (
              <Card
                key={movie.id}
                className="group relative overflow-hidden cursor-pointer transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
              >
                <div className="aspect-[2/3] overflow-hidden">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h4 className="font-semibold mb-2">{movie.title}</h4>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={16} className="fill-yellow-500 text-yellow-500" />
                        <span>{movie.rating}</span>
                      </div>
                      <span className="text-muted-foreground">{movie.year}</span>
                    </div>
                    <Button size="sm" className="w-full mt-3 bg-gradient-to-r from-primary to-secondary">
                      <Icon name="Play" size={16} className="mr-2" />
                      Смотреть
                    </Button>
                  </div>
                </div>
                <Badge className="absolute top-2 right-2 bg-primary/90">
                  {movie.subscription === 'premium' ? '⭐' : movie.subscription === 'standard' ? '✨' : '📺'}
                </Badge>
              </Card>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'subscriptions' && (
        <div className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Выберите свой тариф</h2>
              <p className="text-lg text-muted-foreground">
                Гибкая система подписок с разными уровнями доступа к контенту
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {subscriptions.map((sub) => (
                <Card
                  key={sub.id}
                  className={`relative overflow-hidden p-8 transition-all hover:scale-105 ${
                    sub.popular ? 'ring-2 ring-primary shadow-2xl shadow-primary/20' : ''
                  }`}
                >
                  {sub.popular && (
                    <Badge className="absolute top-4 right-4 bg-gradient-to-r from-primary to-secondary">
                      Популярный
                    </Badge>
                  )}
                  <div className={`h-2 w-full bg-gradient-to-r ${sub.color} rounded-full mb-6`} />
                  <h3 className="text-2xl font-bold mb-2">{sub.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{sub.price}₽</span>
                    <span className="text-muted-foreground">/месяц</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {sub.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${sub.popular ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90' : ''}`}
                    variant={sub.popular ? 'default' : 'outline'}
                  >
                    Выбрать тариф
                  </Button>
                </Card>
              ))}
            </div>

            <div className="mt-16 bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border">
              <h3 className="text-2xl font-bold mb-6">Сравнение тарифов</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-2">Возможности</th>
                      <th className="text-center py-4 px-2">Базовый</th>
                      <th className="text-center py-4 px-2">Стандарт</th>
                      <th className="text-center py-4 px-2">Премиум</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-4 px-2">Качество видео</td>
                      <td className="text-center py-4 px-2">HD</td>
                      <td className="text-center py-4 px-2">Full HD</td>
                      <td className="text-center py-4 px-2">4K Ultra HD</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-2">Устройства одновременно</td>
                      <td className="text-center py-4 px-2">1</td>
                      <td className="text-center py-4 px-2">2</td>
                      <td className="text-center py-4 px-2">4</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-2">Эксклюзивный контент</td>
                      <td className="text-center py-4 px-2">
                        <Icon name="X" size={20} className="text-destructive inline" />
                      </td>
                      <td className="text-center py-4 px-2">
                        <Icon name="Minus" size={20} className="text-muted-foreground inline" />
                      </td>
                      <td className="text-center py-4 px-2">
                        <Icon name="Check" size={20} className="text-primary inline" />
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-2">Без рекламы</td>
                      <td className="text-center py-4 px-2">
                        <Icon name="X" size={20} className="text-destructive inline" />
                      </td>
                      <td className="text-center py-4 px-2">
                        <Icon name="Check" size={20} className="text-primary inline" />
                      </td>
                      <td className="text-center py-4 px-2">
                        <Icon name="Check" size={20} className="text-primary inline" />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-2">Ранний доступ к новинкам</td>
                      <td className="text-center py-4 px-2">
                        <Icon name="X" size={20} className="text-destructive inline" />
                      </td>
                      <td className="text-center py-4 px-2">
                        <Icon name="X" size={20} className="text-destructive inline" />
                      </td>
                      <td className="text-center py-4 px-2">
                        <Icon name="Check" size={20} className="text-primary inline" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'profile' && (
        <div className="container mx-auto px-4 py-12 animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center text-3xl font-bold">
                ИП
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Иван Петров</h2>
                <p className="text-muted-foreground">ivan.petrov@example.com</p>
                <Badge className="mt-2 bg-gradient-to-r from-purple-500 to-pink-500">Стандарт подписка</Badge>
              </div>
            </div>

            <Tabs defaultValue="saved" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="saved">Сохраненные</TabsTrigger>
                <TabsTrigger value="history">История</TabsTrigger>
                <TabsTrigger value="settings">Настройки</TabsTrigger>
              </TabsList>
              <TabsContent value="saved" className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Мой список</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {savedMovies.map((movie) => (
                    <Card key={movie.id} className="group relative overflow-hidden cursor-pointer hover:scale-105 transition-all">
                      <div className="aspect-[2/3] overflow-hidden">
                        <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <h4 className="font-semibold text-sm">{movie.title}</h4>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="history" className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Недавно просмотренные</h3>
                <div className="space-y-4">
                  {watchHistory.map((movie) => (
                    <Card key={movie.id} className="p-4 hover:bg-card/80 transition-colors cursor-pointer">
                      <div className="flex gap-4">
                        <div className="w-24 h-36 rounded overflow-hidden flex-shrink-0">
                          <img src={movie.image} alt={movie.title} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-2">{movie.title}</h4>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <div className="flex items-center gap-1">
                              <Icon name="Star" size={16} className="fill-yellow-500 text-yellow-500" />
                              <span>{movie.rating}</span>
                            </div>
                            <span>{movie.year}</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2 mb-2">
                            <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full w-2/3" />
                          </div>
                          <p className="text-sm text-muted-foreground">Просмотрено 67%</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="settings" className="mt-6">
                <h3 className="text-xl font-semibold mb-4">Настройки профиля</h3>
                <div className="space-y-6">
                  <Card className="p-6">
                    <h4 className="font-semibold mb-4">Подписка</h4>
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="font-medium">Тариф Стандарт</p>
                        <p className="text-sm text-muted-foreground">Следующее списание: 15 января 2025</p>
                      </div>
                      <Button variant="outline">Изменить</Button>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <h4 className="font-semibold mb-4">Поддержка</h4>
                    <div className="space-y-3">
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="MessageCircle" size={20} className="mr-2" />
                        Чат с поддержкой
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="Mail" size={20} className="mr-2" />
                        Email: support@cinestream.ru
                      </Button>
                      <Button variant="outline" className="w-full justify-start">
                        <Icon name="Phone" size={20} className="mr-2" />
                        Телефон: 8 (800) 555-35-35
                      </Button>
                    </div>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;