<template>
  <footer class="footer">
    <LazyCookieBanner />
    <LazyModalsKeyboardShortcutsModal />
    <div class="container footer__wrapper">
      <div class="icons">
        <ul class="footer__list icons__list">
          <li class="icons__list-item">
            <a
              href="https://discord.gg/kzDVurAC"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord">
              <b-icon pack="fab" icon="discord" size="is-medium" />
            </a>
          </li>
          <li class="icons__list-item">
            <a
              href="https://twitter.com/abhishek_rosh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter">
              <b-icon pack="fab" icon="twitter" size="is-medium" />
            </a>
          </li>
          <li class="icons__list-item">
            <a
              href="https://instagram.com/abhishek.nft.wala"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram">
              <b-icon pack="fab" icon="instagram" size="is-medium" />
            </a>
          </li>
          <li class="icons__list-item">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Youtube">
              <b-icon pack="fab" icon="youtube" size="is-medium" />
            </a>
          </li>
          <li class="icons__list-item">
            <a
              href="https://medium.com/aiverse"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Medium">
              <b-icon pack="fab" icon="medium" size="is-medium" />
            </a>
          </li>
        </ul>
      </div>
      <ul class="footer__list">
        <li v-for="item in menu" :key="item.name" class="footer__list-item">
          <a
            v-if="item.external"
            :href="item.url"
            target="_blank"
            rel="noopener noreferrer">
            {{ item.name }}
          </a>
          <nuxt-link v-else :to="item.url">
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { TranslateResult } from 'vue-i18n/types'

interface Menu {
  name: TranslateResult
  url: string
  external?: boolean
}
@Component({})
export default class Footer extends Vue {
  public menu: Menu[] = [
    {
      name: this.$t('About'),
      url: '#',
      external: true,
    },
  ]
}
</script>

<style scoped lang="scss">
@import '@/styles/variables';

.footer {
  opacity: 0.3;

  &:hover {
    opacity: 1;
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 16px;
    height: 135px;

    @include desktop {
      flex-direction: row;
    }
  }

  &__list {
    display: flex;
    align-items: center;
    list-style: none;
    flex-wrap: wrap;
    justify-content: center;
  }

  &__list-item {
    position: relative;
    padding: 0 8px;

    &:not(:last-child) {
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        width: 1px;
        height: 12px;
        background: #fff;
      }
    }
  }
}

.icons {
  &__list-item {
    padding: 0 2px;
  }
}
</style>
