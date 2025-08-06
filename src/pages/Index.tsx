import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: ''
  });

  const cards = [
    {
      country: '🇹🇷 Турция',
      type: 'Mastercard / Visa',
      duration: 'от 7 дней',
      price: '29 900 ₽',
      popular: false
    },
    {
      country: '🇦🇲 Армения',
      type: 'Visa Classic',
      duration: 'от 3 дней',
      price: '24 900 ₽',
      popular: true
    },
    {
      country: '🇰🇬 Киргизия',
      type: 'Visa / Mastercard',
      duration: 'от 1 дня',
      price: '14 900 ₽',
      popular: false
    },
    {
      country: '🌍 СНГ',
      type: 'Visa',
      duration: 'до 2 недель',
      price: '19 900 ₽',
      popular: false
    }
  ];

  const benefits = [
    { icon: 'Globe', text: 'Оплата в любых зарубежных магазинах и сервисах' },
    { icon: 'Smartphone', text: 'Поддержка Apple Pay / Google Pay' },
    { icon: 'RefreshCw', text: 'Получение и отправка международных переводов' },
    { icon: 'Banknote', text: 'Снятие наличных в любых банкоматах' },
    { icon: 'ShoppingCart', text: 'Работа с PayPal, Amazon, Shopify, Binance' },
    { icon: 'FileText', text: 'Выписка, интернет-банк, поддержка на русском' }
  ];

  const features = [
    { icon: 'CheckCircle', text: 'Официально — карта на ваше имя' },
    { icon: 'Clock', text: 'От 1 до 14 дней — быстрые сроки' },
    { icon: 'Shield', text: 'Без доверенностей и поездок' },
    { icon: 'CreditCard', text: 'Рассрочка 0% — оплата частями' }
  ];

  const testimonials = [
    {
      text: "Оформили карту Турции за 9 дней. Пришла курьером. Работает везде — и в Apple Pay, и в Stripe. Спасибо!",
      author: "Дмитрий, Москва"
    },
    {
      text: "Брал для SWIFT-переводов из Европы. Всё пришло, карта активна, банк — реальный. Рекомендую.",
      author: "Артём, Санкт-Петербург"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="gradient-bg py-20 px-4 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: 'url(/img/235d06cb-d06d-46d1-8370-5d935846f622.jpg)'
          }}
        />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Заблокировали Visa и Mastercard?
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Оформи зарубежную банковскую карту — без поездок, доверенностей и бюрократии.
          </p>
          <p className="text-lg mb-12 text-white/80">
            Карты банков Турции, Армении, Киргизии и СНГ с доставкой по РФ.<br />
            Работают с Apple Pay, Google Pay, SWIFT и международными сервисами.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6">
            Оформить карту
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 text-destructive">Знакомые проблемы?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-destructive/20">
              <CardContent className="pt-6">
                <Icon name="X" className="text-destructive mb-4 mx-auto" size={32} />
                <p className="text-sm">Не проходят зарубежные платежи?</p>
              </CardContent>
            </Card>
            <Card className="border-destructive/20">
              <CardContent className="pt-6">
                <Icon name="X" className="text-destructive mb-4 mx-auto" size={32} />
                <p className="text-sm">Не оплатить подписки, Steam, iTunes, Shopify, Airbnb?</p>
              </CardContent>
            </Card>
            <Card className="border-destructive/20">
              <CardContent className="pt-6">
                <Icon name="X" className="text-destructive mb-4 mx-auto" size={32} />
                <p className="text-sm">Нужен способ получать SWIFT-переводы?</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-secondary">Решение есть!</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-secondary/20">
                <CardContent className="pt-6">
                  <Icon name={feature.icon} className="text-secondary mb-4 mx-auto" size={32} />
                  <p className="text-sm">{feature.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Cards Pricing Table */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Выберите подходящую карту</h2>
          <p className="text-center text-muted-foreground mb-12">🎁 Акции и скидки действуют до конца месяца</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, index) => (
              <Card key={index} className={`relative ${card.popular ? 'ring-2 ring-primary' : ''}`}>
                {card.popular && (
                  <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-primary">
                    Популярная
                  </Badge>
                )}
                <CardHeader>
                  <CardTitle className="text-lg">{card.country}</CardTitle>
                  <CardDescription>{card.type}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Срок оформления</p>
                      <p className="font-semibold">{card.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Стоимость</p>
                      <p className="text-2xl font-bold text-primary">{card.price}</p>
                    </div>
                    <Button className="w-full" variant={card.popular ? "default" : "outline"}>
                      Выбрать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Преимущества карт</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <Icon name={benefit.icon} className="text-primary mb-4" size={32} />
                  <p>{benefit.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Card Image Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src="/img/87de53bf-3917-4ac2-81a8-c7c198b5a4e5.jpg" 
            alt="Банковская карта" 
            className="mx-auto rounded-xl shadow-2xl max-w-md w-full"
          />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-secondary/5 border-secondary/20">
                <CardContent className="pt-6">
                  <p className="mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-secondary">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 px-4 bg-destructive/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-destructive">⚠️ Ограниченное предложение</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <Icon name="Users" className="text-primary mb-2 mx-auto" size={32} />
                <p className="font-semibold">Осталось 17 мест</p>
                <p className="text-sm text-muted-foreground">на оформление по спеццене</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Icon name="Package" className="text-primary mb-2 mx-auto" size={32} />
                <p className="font-semibold">Доставка включена</p>
                <p className="text-sm text-muted-foreground">курьером по всей РФ</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <Icon name="Calendar" className="text-primary mb-2 mx-auto" size={32} />
                <p className="font-semibold">До 31 августа</p>
                <p className="text-sm text-muted-foreground">приём заявок</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="gradient-bg py-20 px-4 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Готовы начать?</h2>
          <p className="text-lg mb-8 opacity-90">
            Заполните короткую заявку — и мы подберём оптимальную карту под ваши задачи.
          </p>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                />
                <Input
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                />
                <Input
                  placeholder="Предпочитаемая страна карты"
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
                />
                <Button type="submit" size="lg" className="w-full bg-white text-primary hover:bg-white/90">
                  Отправить заявку
                  <Icon name="Send" className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Карты</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Турция</li>
                <li>Армения</li>
                <li>Киргизия</li>
                <li>СНГ</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Доставка</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>По России</li>
                <li>Курьерская доставка</li>
                <li>Сроки доставки</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>FAQ</li>
                <li>Техподдержка</li>
                <li>Инструкции</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm opacity-80">
                <li>support@example.com</li>
                <li>+7 (999) 123-45-67</li>
                <li>Москва, Россия</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-background/20" />
          <div className="text-center text-sm opacity-60">
            © 2024 Банковские карты. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;