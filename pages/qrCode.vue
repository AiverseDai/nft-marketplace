<template>
  <div class="columns is-multiline">
    <div
      v-for="item in qrCodeList"
      :key="item.title"
      class="column is-half has-text-centered mb-3">
      <a :href="item.link">{{ item.title }}</a>
      <img :src="item.img" class="is-half px-6 mt-2" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import Twitter from '@/assets/qrCode/twitter.png'
import Instagram from '@/assets/qrCode/instagram.png'
import Discord from '@/assets/qrCode/discord.png'
import Github from '@/assets/qrCode/github.png'

@Component({
  name: 'QRCode',
})
export default class QRCode extends Vue {
  // QR code made from https://www.qrcode-monkey.com/
  private qrCodeList = [
    {
      title: 'Discord',
      img: Discord,
      link: 'https://discord.gg/kzDVurAC',
    },
    {
      title: 'Twitter',
      img: Twitter,
      link: '#',
    },
    {
      title: 'Github',
      img: Github,
      link: '#',
    },
    {
      title: 'Instagram',
      img: Instagram,
      link: '#',
    },
  ]
}
</script>
