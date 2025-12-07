import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const validateEmail = (email: string) => {
    return email.includes('@');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Пожалуйста, заполните все поля');
      return;
    }
    
    if (!validateEmail(formData.email)) {
      toast.error('Пожалуйста, введите корректный email');
      return;
    }
    
    toast.success('Спасибо! Ваше сообщение отправлено');
    setFormData({ name: '', email: '', message: '' });
  };

  const portfolioItems = [
    { id: 1, title: 'Проект 1', description: 'Описание проекта 1', category: 'Web Design' },
    { id: 2, title: 'Проект 2', description: 'Описание проекта 2', category: 'Development' },
    { id: 3, title: 'Проект 3', description: 'Описание проекта 3', category: 'Branding' },
    { id: 4, title: 'Проект 4', description: 'Описание проекта 4', category: 'UI/UX' },
  ];

  return (
    <div className="min-h-screen smooth-scroll">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-foreground">Портфолио</h1>
            <div className="hidden md:flex gap-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Обо мне
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Портфолио
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Контакты
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="animate-fade-in">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 text-foreground">
              Создаю цифровые<br />решения
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Специализируюсь на разработке современных веб-приложений и дизайне пользовательских интерфейсов
            </p>
            <Button 
              size="lg" 
              onClick={() => scrollToSection('contact')}
              className="hover-scale"
            >
              Связаться со мной
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Обо мне</h2>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Привет! Я профессиональный веб-разработчик и дизайнер с опытом создания современных цифровых продуктов.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Моя специализация включает разработку интерактивных веб-приложений, создание адаптивных дизайн-систем и оптимизацию пользовательского опыта.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Работаю с современным стеком технологий: React, TypeScript, Tailwind CSS, Node.js. Всегда открыт к новым проектам и интересным задачам.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center">
                  <Icon name="Code" size={32} className="mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Разработка</h3>
                  <p className="text-sm text-muted-foreground">Чистый код и лучшие практики</p>
                </div>
                <div className="text-center">
                  <Icon name="Palette" size={32} className="mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Дизайн</h3>
                  <p className="text-sm text-muted-foreground">Минималистичный и функциональный</p>
                </div>
                <div className="text-center">
                  <Icon name="Zap" size={32} className="mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Оптимизация</h3>
                  <p className="text-sm text-muted-foreground">Быстрая загрузка и производительность</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Портфолио</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="overflow-hidden border-0 shadow-sm hover-scale transition-all">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Icon name="Image" size={48} className="text-primary/40" />
                </div>
                <CardContent className="p-6">
                  <span className="text-xs font-medium text-primary mb-2 block">{item.category}</span>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Контакты</h2>
          <Card className="border-0 shadow-sm">
            <CardContent className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Имя
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем проекте..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Отправить сообщение
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Портфолио</h3>
              <p className="text-background/80">
                Создаю современные веб-решения для бизнеса
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-background/80">
                <p>
                  <a href="tel:+79991234567" className="hover:text-primary transition-colors">+7 (920) 740-45-42</a>
                </p>
                <p>
                  <a href="mailto:example@mail.ru" className="hover:text-primary transition-colors">
                    example@mail.ru
                  </a>
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Соцсети</h3>
              <div className="flex gap-4">
                <a 
                  href="https://t.me/username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >danka.trofim2007@mail.ru</a>
                <a 
                  href="https://github.com/username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  <Icon name="Github" size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>© 2025 Портфолио. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;