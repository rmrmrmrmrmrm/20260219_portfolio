/**
 * 実績マスタ。案件を増やすときはここにオブジェクトを追加するだけで一覧・詳細に反映されます。
 * （親フォルダの index.html の WORK 欄から流用）
 *
 * - summary … 一覧カード用の短文（未指定時は overview を使えますが、一覧用に必ず入れるのがおすすめ）
 * - overview … 詳細の「概要」（未指定時は summary を表示）
 * - impressions … 詳細の「感想」段落の配列（未指定時は body）
 */
export const works = [
  {
    slug: 'keihoku',
    title: '京北運動公園',
    year: '2023',
    role: 'コーディング',
    tags: ['WordPress', 'サイト制作'],
    /** public フォルダからのパス（例: img/work/keihoku.png） */
    image: 'img/work/keihoku.png',
    summary: '新規WPサイトのコーディングを担当しました。',
    overview: '新規WPサイトのコーディングを担当しました。',
    /** 静的サイトの「URL」欄 */
    url: 'https://athletic.kyoto-keihoku.jp/',
    /** 静的サイトの「技術スタック」欄（表示用） */
    stack: '【CMS】WordPress',
    impressions: [
      'ディレクターさんからコンパネ情報を頂き、WPインストールからSSH設定まで対応しました。',
      'CSSアニメーションを使用し、リキッドレイアウトに配慮して作成しています。',
    ],
  },
  {
    slug: 'badgekoi',
    title: 'バッジコイ!!!',
    year: '2023',
    role: 'コーディング',
    tags: ['WordPress', 'サイト制作'],
    /** public フォルダからのパス（例: img/work/badgekoi.png） */
    image: 'img/work/badgekoi.png',
    summary: '新規EC(+WP)のコーディングを担当しました。',
    overview: '新規EC(+WP)のコーディングを担当しました。',
    /** 静的サイトの「URL」欄 */
    url: 'https://www.badge-koi.com/',
    /** 静的サイトの「技術スタック」欄（表示用） */
    stack: '【CMS】makeshop、WordPress',
    impressions: [
      'ベースはmakeshop',
      '記事部分(マガジン,ニュース)の更新はWPになっており、新着4件をトップページ(makeshop)に表示させています。',
      '動的部分が多い為、データ数が0の時や、逆に段落ちする程大量にある時、カラム数が変わった時など',
      '運用開始後に崩れないか等の可能性に配慮して、テスト確認をしながら進めました。',
    ],
  },
  {
    slug: 'sennyuji',
    title: '泉涌寺',
    year: '2017',
    role: 'デザイン、コーディング',
    tags: ['A-spec', 'サイト制作'],
    /** public フォルダからのパス（例: img/work/sennyuji.png） */
    image: 'img/work/sennyuji.png',
    summary: 'お寺の公式サイトを、自社CMS上で作成しました。ディレクション、デザインを担当しています。',
    overview: 'お寺の公式サイトを、自社CMS上で作成しました。ディレクション、デザインを担当しています。',
    /** 静的サイトの「URL」欄 */
    url: 'https://web.archive.org/web/20171222220633/http://www.mitera.org/',
    /** 静的サイトの「技術スタック」欄（表示用） */
    stack: '【CMS】A-spec',
    impressions: [
      '初ディレクションをした思い出深いサイトです。',
      '「ユーザーはこのサイトからどんな情報を得たいのか」',
      '「お寺の特徴と全体像をどうやったらシンプルに伝えられるか」を軸に、',
      'コンテンツ設計/デザインを考えました。',
      '',
      '管理画面機能があるサイトの為、',
      '更新頻度が高いコンテンツ(お知らせ,花の見頃,バナーなど)部分では、',
      '増減に対応できるテスト確認も行いました。',
    ],
  },
  //{
  //  slug: 'sample-dashboard',
  //  title: '社内向けダッシュボード',
  //  year: '2023',
  //  role: 'UI実装',
  //  tags: ['Vue', 'Chart'],
  //  summary:
  //    '業務データの可視化画面のプロトタイプ。一覧・詳細の導線をシンプルにまとめた例です。',
  //  body: [
  //    'グラフライブラリと連携し、レスポンシブなレイアウトで主要KPIを表示する構成にしました。',
  //    '権限に応じた表示切り替えのためのルート設計の叩き台として利用できます。',
  //  ],
  //},
]

export function getWorkBySlug(slug) {
  return works.find((w) => w.slug === slug) ?? null
}
