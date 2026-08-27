import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Activity,
  Award,
  Baby,
  Braces,
  CalendarCheck,
  ChevronDown,
  Instagram,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ScanLine,
  Send,
  Shield,
  Smile,
  Sparkles,
  Star,
  Stethoscope,
  Syringe,
  Users,
  X,
} from "lucide-react";

import { BeforeAfter } from "@/components/BeforeAfter";
import { BookingForm } from "@/components/BookingForm";
import heroImg from "@/assets/hero.jpg";
import clinicImg from "@/assets/clinic.jpg";
import doc1 from "@/assets/doc1.jpg";
import doc2 from "@/assets/doc2.jpg";
import doc3 from "@/assets/doc3.jpg";
import doc4 from "@/assets/doc4.jpg";
import baBefore from "@/assets/ba-before.jpg";
import baAfter from "@/assets/ba-after.jpg";
import tech1 from "@/assets/tech1.jpg";
import tech2 from "@/assets/tech2.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DENTAL Lumière — премиальная стоматология в Алматы" },
      {
        name: "description",
        content:
          "Премиальная стоматология для всей семьи: имплантация, ортодонтия, виниры и гигиена. Точная 3D-диагностика и безболезненное лечение. Запись на консультацию.",
      },
      { property: "og:title", content: "DENTAL Lumière — премиальная стоматология" },
      {
        property: "og:description",
        content:
          "Современная клиника с 3D-диагностикой, опытными врачами и прозрачными ценами. Запишитесь на консультацию.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const PHONE = "+7 707 500 40 40";
const PHONE_HREF = "tel:+77075004040";
const WA_HREF = "https://wa.me/77075004040";

const nav = [
  { label: "Услуги", href: "#services" },
  { label: "Врачи", href: "#doctors" },
  { label: "О клинике", href: "#about" },
  { label: "Цены", href: "#prices" },
  { label: "Контакты", href: "#contacts" },
];

const services = [
  { icon: Stethoscope, title: "Лечение зубов", text: "Качественное лечение кариеса и заболеваний зубов." },
  { icon: Syringe, title: "Имплантация", text: "Восстановление зубов с использованием современных имплантационных систем." },
  { icon: Braces, title: "Ортодонтия", text: "Исправление прикуса и положения зубов." },
  { icon: Sparkles, title: "Эстетическая стоматология", text: "Виниры, отбеливание и профессиональная реставрация." },
  { icon: Shield, title: "Профессиональная гигиена", text: "Удаление зубного камня и профилактика заболеваний." },
  { icon: Baby, title: "Детская стоматология", text: "Бережное лечение и комфортный подход к детям." },
];

const advantages = [
  { n: "01", title: "Точная диагностика", text: "Современное диагностическое оборудование позволяет точно определить проблему до начала лечения." },
  { n: "02", title: "Комфорт без лишнего стресса", text: "Создаём спокойную атмосферу и подробно объясняем каждый этап лечения." },
  { n: "03", title: "Опытные врачи", text: "Команда специалистов с большим практическим опытом." },
  { n: "04", title: "Прозрачное лечение", text: "Пациент заранее понимает план лечения и его стоимость." },
];

const doctors = [
  { img: doc1, name: "Алишер Нурланов", role: "Врач-стоматолог, хирург", exp: "Опыт: 12 лет" },
  { img: doc2, name: "Дина Ержанова", role: "Врач-стоматолог, ортодонт", exp: "Опыт: 10 лет" },
  { img: doc3, name: "Виктор Ким", role: "Имплантолог, ортопед", exp: "Опыт: 18 лет" },
  { img: doc4, name: "Айгерим Сатова", role: "Детский стоматолог", exp: "Опыт: 8 лет" },
];

const prices = [
  { title: "Консультация врача", note: "с осмотром и планом лечения", price: "от 5 000 ₸" },
  { title: "Профессиональная гигиена", note: "ультразвук + Air Flow", price: "от 25 000 ₸" },
  { title: "Лечение кариеса", note: "с фотополимерной пломбой", price: "от 30 000 ₸" },
  { title: "Отбеливание", note: "кабинетная система", price: "от 90 000 ₸" },
  { title: "Имплантация", note: "имплант премиум-класса", price: "от 250 000 ₸" },
  { title: "Виниры", note: "керамика E.max, за единицу", price: "от 180 000 ₸" },
];

const tech = [
  { img: tech1, title: "3D-диагностика и цифровой рентген", text: "КЛКТ-снимок за секунды с минимальной лучевой нагрузкой — видим то, что не покажет обычный осмотр." },
  { img: tech2, title: "Цифровое сканирование и CAD/CAM", text: "Слепки без пасты: сканер строит 3D-модель, а фрезерный центр изготавливает коронку в тот же день." },
];

const techList = [
  "Цифровой рентген",
  "3D диагностика (КЛКТ)",
  "Современная анестезия",
  "Цифровое сканирование",
  "CAD/CAM технологии",
];

const reviews = [
  { name: "Мадина А.", text: "Очень понравилась клиника. Врач подробно объяснил план лечения, всё прошло спокойно и комфортно." },
  { name: "Ержан К.", text: "Ставил два импланта. Никакой боли, всё чётко по срокам и по озвученной стоимости." },
  { name: "Ольга П.", text: "Привела ребёнка — боялись до слёз. Врач нашла подход, теперь сын сам просится на осмотр." },
  { name: "Тимур С.", text: "Сделал виниры. Результат выглядит естественно, а не как накладные зубы. Спасибо команде." },
  { name: "Асель Н.", text: "Гигиена на высшем уровне, всё аккуратно и без неприятных ощущений. Администраторы очень внимательные." },
  { name: "Данияр Б.", text: "Понравилась прозрачность: показали снимки, объяснили каждый пункт сметы. Доверие с первого визита." },
];

const faq = [
  { q: "Больно ли лечить зубы?", a: "Мы используем современные анестетики и щадящие протоколы. Большинство пациентов отмечают, что лечение проходит комфортно, а при повышенной тревожности предлагаем седацию." },
  { q: "Сколько стоит консультация?", a: "Консультация с осмотром и составлением плана лечения — от 5 000 ₸. При начале лечения в день обращения стоимость консультации учитывается в смете." },
  { q: "Можно ли записаться в день обращения?", a: "Да, мы всегда держим резерв под срочные обращения и острую боль. Позвоните или напишите в WhatsApp — подберём ближайшее окно." },
  { q: "Есть ли лечение для детей?", a: "Да, у нас работает детский стоматолог. Первый визит проходит в формате знакомства с клиникой, без давления и лишнего стресса." },
  { q: "Как подготовиться к имплантации?", a: "Нужны 3D-снимок и базовые анализы. Врач оценит объём кости и составит цифровой план операции — всё это делается в клинике за один визит." },
  { q: "Можно ли оплатить лечение частями?", a: "Да, доступна рассрочка до 12 месяцев без переплаты, а также поэтапная оплата по мере выполнения плана лечения." },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="reveal max-w-2xl">
      <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-semibold text-accent">
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl font-bold text-primary sm:text-4xl md:text-[2.75rem]">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        solid ? "border-b border-border bg-background/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="container-x grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3.5 lg:py-4">
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
            <Smile className="h-5 w-5" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block truncate text-base font-extrabold tracking-tight text-primary">
              DENTAL <span className="text-accent">Lumière</span>
            </span>
            <span className="hidden text-xs font-medium text-muted-foreground sm:block">
              Premium dental clinic
            </span>
          </span>
        </a>

        <div className="flex items-center gap-2 lg:gap-6">
          <nav className="hidden items-center gap-6 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-[0.95rem] font-medium text-foreground/80 transition-colors hover:text-accent"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={PHONE_HREF}
            className="hidden text-[0.95rem] font-bold text-primary transition-colors hover:text-accent xl:block"
          >
            {PHONE}
          </a>
          <a
            href="#booking"
            className="hidden rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-elegant lg:inline-flex"
          >
            Записаться на консультацию
          </a>

          <a
            href={PHONE_HREF}
            aria-label="Позвонить"
            className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-primary lg:hidden"
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            aria-label="Меню"
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="container-x flex flex-col py-2">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-4 text-base font-medium text-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="my-4 rounded-2xl bg-primary px-5 py-4 text-center text-base font-semibold text-primary-foreground"
            >
              Записаться на консультацию
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-40 -top-52 h-[34rem] w-[34rem] rounded-full bg-secondary blur-3xl" />
      <div className="container-x relative grid items-center gap-12 py-12 lg:grid-cols-[1.05fr_1fr] lg:py-20">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/25 bg-card px-4 py-2 text-sm font-semibold text-accent shadow-soft">
            <Sparkles className="h-4 w-4" />
            Стоматология нового поколения
          </span>

          <h1 className="mt-6 text-[2.15rem] font-extrabold text-primary sm:text-5xl lg:text-[3.5rem]">
            Здоровая улыбка начинается с правильного решения
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Современная стоматология для всей семьи. Точная диагностика, опытные врачи и комфортное
            лечение без лишнего стресса.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-7 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-elegant"
            >
              <CalendarCheck className="h-5 w-5" />
              Записаться на консультацию
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-2xl border border-border bg-card px-7 py-4 text-base font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
            >
              Посмотреть услуги
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
            {["Современное оборудование", "Опытные специалисты", "Безболезненное лечение"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-[0.95rem] font-medium text-foreground">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-accent-soft text-primary">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="reveal relative">
          <img
            src={heroImg}
            alt="Врач-стоматолог с пациенткой в современной клинике"
            width={1200}
            height={1408}
            className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-elegant"
          />
          <div className="absolute -bottom-6 left-4 hidden rounded-3xl border border-border bg-card/95 p-5 shadow-soft backdrop-blur sm:block">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary text-accent">
                <Star className="h-5 w-5 fill-current" />
              </span>
              <div className="min-w-0">
                <p className="text-lg font-extrabold text-primary">4.9 / 5</p>
                <p className="text-sm text-muted-foreground">15 000+ довольных пациентов</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: Award, title: "10+ лет опыта", text: "Работаем с 2015 года" },
    { icon: Users, title: "15 000+ пациентов", text: "Возвращаются семьями" },
    { icon: Star, title: "4.9 / 5 рейтинг", text: "По отзывам пациентов" },
    { icon: ScanLine, title: "Современная диагностика", text: "3D-снимки и сканирование" },
  ];
  return (
    <section className="container-x py-6 lg:py-10">
      <div className="reveal grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i) => (
          <div key={i.title} className="flex items-center gap-4 bg-card px-6 py-7">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary text-accent">
              <i.icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-base font-bold text-primary">{i.title}</p>
              <p className="text-sm text-muted-foreground">{i.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="container-x scroll-mt-24 py-16 lg:py-24">
      <SectionTitle
        eyebrow="Услуги"
        title="Все необходимое для здоровой улыбки"
        subtitle="Лечение, профилактика и эстетическая стоматология в одной клинике."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="reveal group flex flex-col rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-elegant"
          >
            <span className="grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
              <s.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-6 text-xl font-bold text-primary">{s.title}</h3>
            <p className="mt-3 flex-1 text-base text-muted-foreground">{s.text}</p>
            <a
              href="#booking"
              className="mt-6 inline-flex items-center gap-2 text-[0.95rem] font-semibold text-accent"
            >
              Подробнее
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Why() {
  return (
    <section id="about" className="scroll-mt-24 bg-secondary/60 py-16 lg:py-24">
      <div className="container-x">
        <SectionTitle eyebrow="Почему мы" title="Стоматология, в которую хочется возвращаться" />
        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {advantages.map((a) => (
              <div key={a.n} className="reveal rounded-3xl border border-border bg-card p-7">
                <span className="text-2xl font-extrabold text-accent">{a.n}</span>
                <h3 className="mt-4 text-lg font-bold text-primary">{a.title}</h3>
                <p className="mt-2.5 text-base text-muted-foreground">{a.text}</p>
              </div>
            ))}
          </div>
          <div className="reveal">
            <img
              src={clinicImg}
              alt="Интерьер современной стоматологической клиники"
              loading="lazy"
              width={1200}
              height={1008}
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Doctors() {
  return (
    <section id="doctors" className="container-x scroll-mt-24 py-16 lg:py-24">
      <SectionTitle
        eyebrow="Команда"
        title="Врачи, которым можно доверять"
        subtitle="Каждый специалист ведёт пациента от диагностики до финального результата."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {doctors.map((d) => (
          <article key={d.name} className="reveal group overflow-hidden rounded-3xl border border-border bg-card">
            <img
              src={d.img}
              alt={`${d.name} — ${d.role}`}
              loading="lazy"
              width={800}
              height={900}
              className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="p-6">
              <h3 className="text-lg font-bold text-primary">{d.name}</h3>
              <p className="mt-1 text-[0.95rem] text-muted-foreground">{d.role}</p>
              <p className="mt-1 text-sm font-semibold text-accent">{d.exp}</p>
              <a
                href="#booking"
                className="mt-5 block rounded-xl border border-border py-3 text-center text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent"
              >
                Подробнее о враче
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Results() {
  return (
    <section className="bg-secondary/60 py-16 lg:py-24">
      <div className="container-x">
        <SectionTitle
          eyebrow="Результаты"
          title="Результат, который говорит сам за себя"
          subtitle="Реальные случаи наших пациентов. Потяните ползунок, чтобы увидеть разницу."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="reveal">
            <BeforeAfter before={baBefore} after={baAfter} label="Виниры + отбеливание, 8 единиц" />
          </div>
          <div className="reveal">
            <BeforeAfter before={baBefore} after={baAfter} label="Эстетическая реставрация фронтальной зоны" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Prices() {
  return (
    <section id="prices" className="container-x scroll-mt-24 py-16 lg:py-24">
      <SectionTitle
        eyebrow="Цены"
        title="Понятные цены без скрытых платежей"
        subtitle="Смету согласовываем до начала лечения — сумма в конце не меняется."
      />
      <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-card">
        {prices.map((p) => (
          <div
            key={p.title}
            className="reveal grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-b border-border px-6 py-5 last:border-b-0 transition-colors hover:bg-secondary/50 sm:px-8"
          >
            <div className="min-w-0">
              <p className="text-base font-semibold text-primary sm:text-lg">{p.title}</p>
              <p className="text-sm text-muted-foreground">{p.note}</p>
            </div>
            <p className="shrink-0 text-base font-extrabold text-accent sm:text-lg">{p.price}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-sm text-muted-foreground">
          Точная стоимость определяется после консультации и диагностики.
        </p>
        <a
          href="#booking"
          className="w-full rounded-2xl bg-primary px-7 py-4 text-center text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-elegant sm:w-auto"
        >
          Получить точную стоимость
        </a>
      </div>
    </section>
  );
}

function Technology() {
  return (
    <section className="container-x py-16 lg:py-24">
      <SectionTitle
        eyebrow="Технологии"
        title="Современные технологии для точной диагностики"
        subtitle="Оборудование, которое сокращает лечение и делает результат предсказуемым."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {tech.map((t) => (
          <article key={t.title} className="reveal overflow-hidden rounded-3xl border border-border bg-card">
            <img
              src={t.img}
              alt={t.title}
              loading="lazy"
              width={900}
              height={700}
              className="aspect-[9/7] w-full object-cover"
            />
            <div className="p-7">
              <h3 className="text-xl font-bold text-primary">{t.title}</h3>
              <p className="mt-3 text-base text-muted-foreground">{t.text}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="reveal mt-6 flex flex-wrap gap-3">
        {techList.map((t) => (
          <span
            key={t}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-primary"
          >
            <Activity className="h-4 w-4 text-accent" />
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section className="bg-secondary/60 py-16 lg:py-24">
      <div className="container-x">
        <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
          <SectionTitle eyebrow="Отзывы" title="Пациенты рекомендуют нас" />
          <div className="reveal rounded-3xl border border-border bg-card px-7 py-5">
            <p className="text-3xl font-extrabold text-primary">4.9 / 5</p>
            <p className="text-sm text-muted-foreground">На основе отзывов пациентов</p>
          </div>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="reveal flex flex-col rounded-3xl border border-border bg-card p-7">
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-base text-foreground/85">«{r.text}»</blockquote>
              <figcaption className="mt-5 text-sm font-bold text-primary">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="container-x py-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionTitle eyebrow="FAQ" title="Частые вопросы" subtitle="Если не нашли ответ — напишите нам в WhatsApp." />
        <div className="reveal divide-y divide-border overflow-hidden rounded-3xl border border-border bg-card">
          {faq.map((f, i) => (
            <div key={f.q}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                aria-expanded={open === i}
                className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-5 text-left sm:px-8"
              >
                <span className="text-base font-semibold text-primary sm:text-lg">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <p className="px-6 pb-6 text-base text-muted-foreground sm:px-8">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="container-x py-8 lg:py-12">
      <div className="reveal relative overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-center sm:px-12 lg:py-20">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-28 -right-16 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />
        <div className="relative mx-auto max-w-2xl">
          <h2 className="text-3xl font-extrabold text-primary-foreground sm:text-5xl">
            Ваша улыбка заслуживает лучшего
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/75">
            Запишитесь на консультацию и получите персональный план лечения.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="#booking"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-accent px-7 py-4 text-base font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
            >
              <CalendarCheck className="h-5 w-5" />
              Записаться на консультацию
            </a>
            <a
              href={WA_HREF}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-primary-foreground/25 px-7 py-4 text-base font-semibold text-primary-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <MessageCircle className="h-5 w-5" />
              Написать в WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contacts() {
  return (
    <section id="contacts" className="container-x scroll-mt-24 py-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <SectionTitle eyebrow="Контакты" title="Мы рядом" subtitle="Клиника в центре города, парковка для пациентов бесплатно." />
          <ul className="reveal mt-9 space-y-4">
            {[
              { icon: MapPin, label: "Адрес", value: "г. Алматы, пр. Достык, 132" },
              { icon: Phone, label: "Телефон", value: PHONE, href: PHONE_HREF },
              { icon: MessageCircle, label: "WhatsApp", value: PHONE, href: WA_HREF },
              { icon: Mail, label: "Время работы", value: "Пн–Сб: 09:00–20:00" },
            ].map((c) => (
              <li key={c.label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-accent">
                  <c.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="text-base font-bold text-primary hover:text-accent">
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-base font-bold text-primary">{c.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <div className="reveal mt-6 overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Карта — расположение клиники"
              src="https://www.openstreetmap.org/export/embed.html?bbox=76.94%2C43.22%2C76.98%2C43.25&layer=mapnik"
              className="h-72 w-full"
              loading="lazy"
            />
          </div>
        </div>
        <div id="booking" className="scroll-mt-24">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary text-primary-foreground">
              <Smile className="h-5 w-5" />
            </span>
            <span className="text-base font-extrabold tracking-tight text-primary">
              DENTAL <span className="text-accent">Lumière</span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-base text-muted-foreground">
            Премиальная семейная стоматология: цифровая диагностика, бережное лечение и прозрачные
            цены с 2015 года.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: MessageCircle, href: WA_HREF, label: "WhatsApp" },
              { icon: Send, href: "#", label: "Telegram" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-accent transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <nav className="flex flex-col gap-3">
          <p className="text-sm font-bold uppercase tracking-wide text-primary">Навигация</p>
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-base text-muted-foreground hover:text-accent">
              {n.label}
            </a>
          ))}
          <a href="#" className="text-base text-muted-foreground hover:text-accent">
            Политика конфиденциальности
          </a>
        </nav>

        <div className="flex flex-col gap-3">
          <p className="text-sm font-bold uppercase tracking-wide text-primary">Контакты</p>
          <a href={PHONE_HREF} className="text-base font-bold text-primary hover:text-accent">
            {PHONE}
          </a>
          <p className="text-base text-muted-foreground">г. Алматы, пр. Достык, 132</p>
          <p className="text-base text-muted-foreground">Пн–Сб: 09:00–20:00</p>
        </div>
      </div>
      <div className="border-t border-border py-6">
        <p className="container-x text-sm text-muted-foreground">
          © {new Date().getFullYear()} DENTAL Lumière. Все права защищены.
        </p>
      </div>
    </footer>
  );
}

function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur-xl lg:hidden">
      <div className="grid grid-cols-3 gap-2 px-3 py-2.5">
        <a
          href={PHONE_HREF}
          className="flex flex-col items-center gap-1 rounded-xl py-2 text-xs font-semibold text-primary"
        >
          <Phone className="h-5 w-5" />
          Позвонить
        </a>
        <a
          href={WA_HREF}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 rounded-xl bg-secondary py-2 text-xs font-semibold text-accent"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>
        <a
          href="#booking"
          className="flex flex-col items-center gap-1 rounded-xl bg-primary py-2 text-xs font-semibold text-primary-foreground"
        >
          <CalendarCheck className="h-5 w-5" />
          Записаться
        </a>
      </div>
    </div>
  );
}

function Landing() {
  useReveal();
  return (
    <div className="min-h-screen bg-background pb-20 lg:pb-0">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Why />
        <Doctors />
        <Results />
        <Prices />
        <Technology />
        <Reviews />
        <Faq />
        <FinalCta />
        <Contacts />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
