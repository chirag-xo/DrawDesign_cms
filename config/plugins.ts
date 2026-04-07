import type { Core } from '@strapi/strapi';

const config = ({ env }: Core.Config.Shared.ConfigParams): Core.Config.Plugin => ({
  // ============================================
  // CLOUDFLARE R2 UPLOAD PROVIDER
  // ============================================
  // To enable Cloudflare R2 media storage:
  //
  // 1. Install the provider:
  //    npm install @strapi/provider-upload-aws-s3
  //
  // 2. Set these env vars in .env:
  //    CLOUDFLARE_R2_ACCESS_KEY_ID=your-access-key
  //    CLOUDFLARE_R2_ACCESS_SECRET=your-secret-key
  //    CLOUDFLARE_R2_ENDPOINT=https://<account-id>.r2.cloudflarestorage.com
  //    CLOUDFLARE_R2_BUCKET=your-bucket-name
  //    CLOUDFLARE_R2_PUBLIC_URL=https://cdn.yourdomain.com
  //
  // 3. Uncomment the upload block below:
  //
  // upload: {
  //   config: {
  //     provider: '@strapi/provider-upload-aws-s3',
  //     providerOptions: {
  //       s3Options: {
  //         credentials: {
  //           accessKeyId: env('CLOUDFLARE_R2_ACCESS_KEY_ID'),
  //           secretAccessKey: env('CLOUDFLARE_R2_ACCESS_SECRET'),
  //         },
  //         endpoint: env('CLOUDFLARE_R2_ENDPOINT'),
  //         region: 'auto',
  //         params: {
  //           Bucket: env('CLOUDFLARE_R2_BUCKET'),
  //         },
  //       },
  //     },
  //     actionOptions: {
  //       upload: {},
  //       uploadStream: {},
  //       delete: {},
  //     },
  //   },
  // },
});

export default config;
