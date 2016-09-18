# Challenges pour la conception du PiTune

## Sortie audio sur le Raspberry PI.

- Jack 1/8 Stéréo(Natif)
  Simple, le coût est nul, mais la qualité est horrible.

- HDMI(Natif)
  Relativement simple, mais il faut une conversion DAC quelque part par la suite. Je n'ai aucune idée encore de la qualité. Le prix est moyen (≈ 10$).

- Carte de son USB
  La qualité est correct. Le prix est bon (≈ 10$). Mais le «setup» est problèmatique. Le plus grand enjeux est l'instabilité de la solution.

- Hat I2C
  Solution la plus onéreuse (≈ 60$). Mais, qualité audio exceptionnel avec configuration stable.
  Ex.
  - [Mamboberry](https://volumio.org/product/collybia-mamboberry-ls-dac/)
  - [HiFiBerry](https://www.hifiberry.com/)

## Interaction avec la librairie audio sur le PI.

- Interface WEb
- Association de fonction avec des cartes RFID
  - Un tag <=> Une chanson
  - Un tag <=> Une fonction (Off)
  - Un tag <=> Une playlist
  - Un tag <=> Un album

## RFID direct sur le PI.

- SPI + RFID + nodejs

## Lecture des MP3 sur le PI.

- nodejs + lecture MP3.

## Retrofit d'un haut-parleur/radio.

- Faire entrer tout l'electronique et décider de l'alimentation
