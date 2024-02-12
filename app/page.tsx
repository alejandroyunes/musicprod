import Billboard from "@/components/billboard"
import WidgetCeo from "@/components/widgets/widgetCeo"
import WidgetService from "@/components/widgets/widgetService"
import WidgetAbout from '@/components/widgets/widgetAbout'
import WidgetPartner from '@/components/widgets/widgetPartners'
import WidgetBlog from '@/components/widgets/widgetBlog'
import WidgetGetInTouch from '@/components/widgets/widgetGetInTouch'
import WidgetFooter from '@/components/widgets/widgetFooter'
import WidgetTitle from "@/components/widgets/widgetTitle"
import WidgetEvents from "@/components/widgets/widgetEvents"
import WidgetMusic from "@/components/widgets/widgetMusic"
import WidgetImageGrid from "@/components/widgets/widgetImageGrid"

export default function Home() {

  return (
    <>
      <Billboard />

      <WidgetTitle title="Great quality for your tracks" subtitle="OUR MUSIC STUDIO" />
      <WidgetCeo />

      <WidgetTitle title=" Crafting Masterpieces" subtitle="Quality is our heartbeat" />
      <WidgetService />

      <WidgetTitle title="Upcoming Events" subtitle="Tour Dates 2024" />
      <WidgetEvents />

      <WidgetImageGrid />

      <WidgetMusic />

      {/* 
    
      <WidgetPartner />
      <WidgetBlog />
  */}
    </>
  )
}
