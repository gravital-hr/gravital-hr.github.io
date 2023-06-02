---
layout: home
menu_language: bg

header:
  title: Темата на български
  text: >
    Ето го и нашият сайт на български
  action: # action button is optional
    label: Готови ли сте да научите повече?
    url: '#about'


sections:
  - type: call-to-action.html
    section_id: about
    background_style: bg-primary
    title: Ние имаме това, от което се нуждаете.
    text: |
        Аз съм българче и силна
        майка мене е родила;
        с хубости, блага обилна
        мойта родина е мила.
    actions:
      - title: Научете повече
        url: '#page-top'
        class: btn-light

  - type: services.html
    section_id: services
    #background_style: bg-info
    title: Модули
    services:
      - title: Обучение
        text: Our templates are updated regularly so they don't break.
        icon: bi-gem text-info
        url: https://startbootstrap.com/
      - title: Атестации
        text: You can use this theme as is, or you can make changes!
        icon: bi-rocket-takeoff
      - title: Обратна връзка
        text: We update dependencies to keep things fresh.
        icon: bi-activity
      - title: Организационна Структура
        text: You have to make your websites with love these days!
        icon: bi-heart-fill

  - type: portfolio.html
    # this section has always ID 'portfolio'
    #section_id: portfolio
    #background_style: bg-dark
    projects:
      - title: Project 1
        text: This is a very short project description.
        # the images are located in:
        # img/portfolio/fullsize
        # img/portfolio/thumbnails
        icon: 1.jpg
        url: '#'
      - title: Project 2
        text: This is a very short project description.
        icon: 2.jpg
        url: '#'
      - title: Project 3
        text: This is a very short project description.
        icon: 3.jpg
        url: '#'
      - title: Project 4
        text: This is a very short project description.
        icon: 4.jpg
        url: '#'
      - title: Project 5
        text: This is a very short project description.
        icon: 5.jpg
        url: '#'
      - title: Project 6
        text: This is a very short project description.
        icon: 6.jpg
        url: '#'

  - type: testimonials.html
    section_id: testimonials
    title: Какво казват другите за нас?
    background_style: bg-dark text-primary
    height: 10em
    actions:
    - name: Иван Иванов
      title: Управител - Фантастико
      text: Бахти якото
    - name: Мария Бакалова
      title: HR - Нова Телевизия
      text: Благодарение на нашите партньори спечелихме наградата ...

  - type: pricing.html
    section_id: pricing
    #background_style: bg-info
    prices:
      - title: Безплатно
        price: 0
        interval: на месец
        action: Обади се
        url: '#'
        features:
        - Up to 10 Users
        - 10 Projects
        - 5GB of Storage
        - Unlimited Data
        - Fully Security Suite
      - title: Про
        price: $69
        interval: на месец
        action: Обади се
        url: '#'
        features:
        - Up to 10 Users
        - Unlimited Projects
        - 50GB of Storage
        - Unlimited Data
        - Fully Security Suite

  - type: contact.html
    section_id: contacts
    title: Свържете се с нас
    text: >-
      Ready to start your next project with us? Give us a call or send us an email
      and we will get back to you as soon as possible!
    actions:
    - title: +1 (202) 555-014
      icon: bi-telephone-fill
    - title: E-Mail
      icon: bi-envelope-fill
      url: mailto:contact@yourwebsite.com
    - title: Twitter
      icon: bi-twitter
      url: '#'
    - title: Facebook
      icon: bi-facebook
      url: '#'

---
