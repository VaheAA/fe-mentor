<template>
  <div class="statistics">
    <div class="container">
      <div class="statistics__inner">
        <h2 class="title title--secondary">Advanced Statistics</h2>
        <p class="subtitle">Track how your links are performing across the web with our
          advanced statistics dashboard.</p>
        <div class="statistics__cards">
          <div class="statistics__card">
            <div class="statistics__card-icon">
              <img src="@/assets/images/icon-brand-recognition.svg" alt="">
            </div>
            <h3 class="statistics__card-title">Brand Recognition
            </h3>
            <p class="statistics__card-text">Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your content.</p>
          </div>
          <div class="statistics__card">
            <div class="statistics__card-icon">
              <img class="statistics__card-icon" src="@/assets/images/icon-detailed-records.svg" alt="">
            </div>
            <h3 class="statistics__card-title">Detailed Records
            </h3>
            <p class="statistics__card-text">Gain insights into who is clicking your links. Knowing when and where
              people engage with your content helps inform better decisions.</p>
          </div>
          <div class="statistics__card">
            <div class="statistics__card-icon">
              <img class="statistics__card-icon" src="@/assets/images/icon-fully-customizable.svg" alt="">
            </div>
            <h3 class="statistics__card-title">Fully Customizable
            </h3>
            <p class="statistics__card-text">Improve brand awareness and content discoverability through customizable
              links, supercharging audience engagement.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.statistics {
  background-color: var(--color-grayish-violet-transparent);
  margin-top: -22rem;
  padding-top: 22rem;
  padding-bottom: 10rem;


  @media (max-width: 728px) {
    margin-top: -10rem;
    padding-top: 10rem;
    padding-bottom: 5rem;
  }

  .title {
    margin-bottom: 2rem;
    text-align: center;


    @media (max-width: 728px) {
      margin-bottom: 1rem;
    }
  }

  .subtitle {
    margin-bottom: 5rem;
    text-align: center;
    max-width: 52rem;
    margin-inline: auto;


    @media (max-width: 728px) {
      margin-bottom: 2rem;
    }
  }

  &__cards {
    display: flex;
    justify-content: space-between;
    gap: 2.7rem;
    width: 100%;
    padding-top: 7rem;
    position: relative;

    @media (max-width: 728px) {
      flex-direction: column;
      text-align: center;
    }

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 5px;
      background-color: var(--color-cyan);
      top: 60%;
      z-index: -1;
    }
  }

  &__card {
    background-color: var(--color-white);
    padding: 2rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    width: 100%;
    align-self: start;

    &:nth-child(2) {
      margin-top: 4rem;


      @media (max-width: 728px) {
        margin-top: 3rem;
      }
    }

    &:nth-child(3) {

      @media (max-width: 728px) {
        margin-top: 3rem;
      }
    }
  }

  &__card-icon {
    background-color: var(--color-very-dark-violet);
    display: inline-flex;
    border-radius: 50%;
    width: 7rem;
    height: 7rem;
    align-items: center;
    justify-content: center;
    margin-bottom: 2.5rem;
    margin-top: -6rem;

    @media (max-width: 728px) {
      margin-inline: auto;
    }

    img {
      display: block;
      width: 50%;
      height: 50%;
      margin: auto;
    }
  }

  &__card-title {
    font-size: 2.5rem;
    color: var(--color-very-dark-violet);
    font-weight: 700;
    margin-bottom: 2rem;
  }

  &__card-text {
    font-size: 1.6rem;
    color: var(--color-gray);
  }
}
</style>