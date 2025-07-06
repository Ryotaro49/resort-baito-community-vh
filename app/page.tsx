import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Users, Heart, MessageCircle, Twitter, Instagram, Mail } from "lucide-react"

export default function ResortCommunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-sky-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-teal-400 rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-sky-800">島バイト仲間</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="#about" className="text-sky-700 hover:text-sky-900 transition-colors">
                コミュニティについて
              </Link>
              <Link href="#regions" className="text-sky-700 hover:text-sky-900 transition-colors">
                地域別チャンネル
              </Link>
              <Link href="#stories" className="text-sky-700 hover:text-sky-900 transition-colors">
                体験談
              </Link>
              <Link href="#faq" className="text-sky-700 hover:text-sky-900 transition-colors">
                よくある質問
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=800&width=1200"
            alt="美しい南の島のビーチ"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-400/30 to-teal-400/30" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-sky-900 mb-6 leading-tight">
              島バイトで、
              <br />
              <span className="text-teal-600">ひとりじゃない</span>
            </h1>
            <p className="text-xl md:text-2xl text-sky-800 mb-8 leading-relaxed">
              リゾートバイトの孤独感を分かち合い、
              <br />
              全国の仲間とつながるコミュニティ
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-sky-500 to-teal-500 hover:from-sky-600 hover:to-teal-600 text-white px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              今すぐDiscordに参加する
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">このコミュニティについて</h2>
            <p className="text-lg text-sky-700 max-w-2xl mx-auto">
              リゾートバイトの孤独感を解消し、全国の仲間とつながる場所です
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-sky-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-sky-400 to-teal-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-sky-900">仲間づくり</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sky-700 text-center">同じ境遇の仲間と出会い、お互いを支え合える関係を築けます</p>
              </CardContent>
            </Card>
            <Card className="border-sky-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-sky-900">孤独の解消</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sky-700 text-center">一人で抱え込まず、気持ちを分かち合える安心できる場所</p>
              </CardContent>
            </Card>
            <Card className="border-sky-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-sky-900">情報共有</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sky-700 text-center">リゾートバイトの体験談や役立つ情報を共有し合えます</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Regional Channels */}
      <section id="regions" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">地域別チャンネル</h2>
            <p className="text-lg text-sky-700">全国各地のリゾートバイト情報を地域別に共有</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                region: "北海道",
                description: "スキー場やニセコ、富良野などの情報交換",
                color: "from-blue-400 to-cyan-400",
              },
              { region: "東北", description: "温泉地や蔵王、安比高原での体験談", color: "from-cyan-400 to-teal-400" },
              { region: "関東", description: "軽井沢や箱根、伊豆での仲間探し", color: "from-teal-400 to-emerald-400" },
              { region: "中部", description: "白馬や志賀高原、伊豆半島の情報", color: "from-emerald-400 to-green-400" },
              { region: "関西", description: "有馬温泉や南紀白浜での体験共有", color: "from-green-400 to-lime-400" },
              {
                region: "中国・四国",
                description: "瀬戸内海や道後温泉の仲間たち",
                color: "from-lime-400 to-yellow-400",
              },
              { region: "九州", description: "別府や湯布院、阿蘇での出会い", color: "from-yellow-400 to-orange-400" },
              { region: "沖縄", description: "石垣島や宮古島、本島での島生活", color: "from-orange-400 to-red-400" },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-sky-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mb-2`}
                  >
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-sky-900">{item.region}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sky-700">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section id="stories" className="py-16 bg-white/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">みんなの体験談</h2>
            <p className="text-lg text-sky-700">コミュニティに参加した仲間たちの声</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-sky-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-teal-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">A</span>
                  </div>
                  <div>
                    <CardTitle className="text-sky-900">Aさん（20代女性）</CardTitle>
                    <CardDescription className="text-sky-600">屋久島でのリゾートバイト</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sky-800 leading-relaxed">
                  「屋久島で3ヶ月間、誰とも深く話せずに孤独でした。でもこのDiscordサーバーに参加してから、同じような経験をした人たちと出会えて本当に救われました。今では島バイト仲間と定期的にオンラインで話しています！」
                </p>
              </CardContent>
            </Card>
            <Card className="border-sky-200 shadow-lg">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">B</span>
                  </div>
                  <div>
                    <CardTitle className="text-sky-900">Bさん（30代男性）</CardTitle>
                    <CardDescription className="text-sky-600">石垣島でのリゾートバイト</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sky-800 leading-relaxed">
                  「石垣島で働いていた時、言葉の壁もあって現地の人とうまく話せませんでした。このコミュニティで同じ島で働いている人と知り合えて、実際に会って一緒に観光もできました。一人じゃないって実感できて嬉しかったです。」
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">よくある質問</h2>
            <p className="text-lg text-sky-700">参加前の疑問にお答えします</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border border-sky-200 rounded-lg px-6">
                <AccordionTrigger className="text-sky-900 hover:text-sky-700">匿名で参加できますか？</AccordionTrigger>
                <AccordionContent className="text-sky-700">
                  はい、ニックネームでの参加が可能です。本名を明かす必要はありません。安心してご参加ください。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border border-sky-200 rounded-lg px-6">
                <AccordionTrigger className="text-sky-900 hover:text-sky-700">
                  参加費用はかかりますか？
                </AccordionTrigger>
                <AccordionContent className="text-sky-700">
                  完全無料です。Discordサーバーの参加に費用は一切かかりません。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border border-sky-200 rounded-lg px-6">
                <AccordionTrigger className="text-sky-900 hover:text-sky-700">
                  現在リゾートバイト中でなくても参加できますか？
                </AccordionTrigger>
                <AccordionContent className="text-sky-700">
                  もちろんです！過去にリゾートバイトを経験した方、これから始める予定の方も大歓迎です。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border border-sky-200 rounded-lg px-6">
                <AccordionTrigger className="text-sky-900 hover:text-sky-700">
                  どのような話題が多いですか？
                </AccordionTrigger>
                <AccordionContent className="text-sky-700">
                  リゾートバイトの体験談、職場での悩み相談、観光情報の共有、オフ会の企画などが主な話題です。
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5" className="border border-sky-200 rounded-lg px-6">
                <AccordionTrigger className="text-sky-900 hover:text-sky-700">
                  退会はいつでもできますか？
                </AccordionTrigger>
                <AccordionContent className="text-sky-700">
                  はい、いつでも自由に退会できます。Discordサーバーから退出するだけで完了です。
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sky-400 to-teal-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">今すぐ仲間と繋がろう</h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            一人で悩まず、同じ経験をした仲間たちと支え合いませんか？
          </p>
          <Button
            size="lg"
            className="bg-white text-sky-600 hover:bg-sky-50 px-8 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Discordに参加する
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-sky-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-sky-400 to-teal-400 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <span className="text-xl font-bold">島バイト仲間</span>
              </div>
              <p className="text-sky-200">リゾートバイトの孤独感を解消し、全国の仲間とつながるコミュニティです。</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">お問い合わせ</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sky-200">contact@shimabaito-nakama.com</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">SNS</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-sky-200 hover:text-white transition-colors">
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-sky-200 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-sky-800 mt-8 pt-8 text-center">
            <p className="text-sky-200">© 2024 島バイト仲間. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
