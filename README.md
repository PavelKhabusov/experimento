# EXPERIMENTO — портфолио Lorenzo Carrillo

Статичное портфолио художника из Асунсьона (Парагвай): прорисованные тушью лица, футболки с ручной росписью, вышивка, холсты, глина. Источник материалов — Instagram [@experimentoo00](https://www.instagram.com/experimentoo00/) и [@_lorenzocarrillo](https://www.instagram.com/_lorenzocarrillo/).

Чистая статика без сборки: `index.html` + `css/` + `js/` + `assets/`.

- `js/data.js` — данные работ (категории, подписи, статусы) и подборка фото для секции «Viajes».
- `assets/posts/` — оригиналы (jpg, для лайтбокса), `assets/thumbs/` — превью webp 720px (для сетки).

## Локальный запуск

```bash
python3 -m http.server 8080
# http://localhost:8080
```

## Деплой на GitHub Pages

```bash
gh repo create experimento-portfolio --public --source . --push
gh api -X POST repos/{owner}/experimento-portfolio/pages -f build_type=workflow 2>/dev/null || true
```

Проще через веб: Settings → Pages → Source: **Deploy from a branch** → `main` / `(root)`.
Файл `.nojekyll` уже лежит в корне. Сайт появится на `https://<owner>.github.io/experimento-portfolio/`.

## Обновление работ

Новые посты тянутся из Instagram анонимным API (см. историю: `web_profile_info` + `feed/user`), картинки кладутся в `assets/posts/` по схеме `<аккаунт>_<shortcode>_<NN>.jpg`, превью: 

```bash
magick assets/posts/NEW.jpg -resize 720x720\> -quality 82 assets/thumbs/NEW.webp
```

и добавляется запись в `js/data.js` (категория: prendas / bordados / cuadros / objetos / sesion).

Сторис/хайлайты анонимно недоступны (нужен логин) — на сайте их нет.
