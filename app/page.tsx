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

export default function Home() {

  return (
    <>
      <Billboard />

      <WidgetTitle title="About Us" subtitle="Our History" />
      <WidgetCeo />

      <WidgetTitle title="Latest News" subtitle="Blog" />
      <WidgetService />

      <WidgetTitle title="Upcoming Events" subtitle="Tour Dates 2024" />
      <WidgetEvents />

      <WidgetMusic />

      {/* 
    
      <WidgetPartner />
      <WidgetBlog />
  */}
    </>
  )
}
