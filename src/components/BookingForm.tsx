import { useState, type FormEvent } from "react";

const services = [
  "Лечение зубов",
  "Имплантация",
  "Ортодонтия",
  "Эстетическая стоматология",
  "Профессиональная гигиена",
  "Детская стоматология",
];

interface Errors {
  name?: string;
  phone?: string;
  service?: string;
}

export function BookingForm() {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    comment: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof values, v: string) =>
    setValues((s) => ({ ...s, [key]: v }));

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const next: Errors = {};
    if (values.name.trim().length < 2) next.name = "Укажите имя";
    const digits = values.phone.replace(/\D/g, "");
    if (digits.length < 10) next.phone = "Укажите корректный номер телефона";
    if (!values.service) next.service = "Выберите услугу";
    setErrors(next);
    if (Object.keys(next).length === 0) setSent(true);
  }

  const field =
    "w-full rounded-2xl border border-border bg-background px-4 py-3.5 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:ring-4 focus:ring-accent/15";

  if (sent) {
    return (
      <div className="rounded-3xl border border-accent/30 bg-secondary p-10 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-6 text-2xl font-semibold text-primary">Спасибо!</h3>
        <p className="mx-auto mt-3 max-w-md text-base text-muted-foreground">
          Мы получили вашу заявку. Администратор свяжется с вами в ближайшее время.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8"
    >
      <h3 className="text-2xl font-semibold tracking-tight text-primary">
        Запишитесь на консультацию
      </h3>
      <p className="mt-2 text-base text-muted-foreground">
        Заполните форму — мы перезвоним и подберём удобное время.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="bf-name" className="mb-2 block text-sm font-medium text-foreground">
            Имя
          </label>
          <input
            id="bf-name"
            className={field}
            placeholder="Ваше имя"
            value={values.name}
            onChange={(e) => set("name", e.target.value)}
          />
          {errors.name && <p className="mt-1.5 text-sm text-destructive">{errors.name}</p>}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="bf-phone" className="mb-2 block text-sm font-medium text-foreground">
            Телефон
          </label>
          <input
            id="bf-phone"
            type="tel"
            className={field}
            placeholder="+7 700 000 00 00"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
          />
          {errors.phone && <p className="mt-1.5 text-sm text-destructive">{errors.phone}</p>}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="bf-service" className="mb-2 block text-sm font-medium text-foreground">
            Услуга
          </label>
          <select
            id="bf-service"
            className={field}
            value={values.service}
            onChange={(e) => set("service", e.target.value)}
          >
            <option value="">Выберите услугу</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
          {errors.service && <p className="mt-1.5 text-sm text-destructive">{errors.service}</p>}
        </div>

        <div className="sm:col-span-1">
          <label htmlFor="bf-date" className="mb-2 block text-sm font-medium text-foreground">
            Желаемая дата
          </label>
          <input
            id="bf-date"
            type="date"
            className={field}
            value={values.date}
            onChange={(e) => set("date", e.target.value)}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="bf-comment" className="mb-2 block text-sm font-medium text-foreground">
            Комментарий
          </label>
          <textarea
            id="bf-comment"
            rows={3}
            className={field}
            placeholder="Что вас беспокоит?"
            value={values.comment}
            onChange={(e) => set("comment", e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-2xl bg-primary px-6 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-elegant"
      >
        Записаться
      </button>
      <p className="mt-3 text-center text-sm text-muted-foreground">
        Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности.
      </p>
    </form>
  );
}
