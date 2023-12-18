import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button'

export default function PlaygroundPage() {
  return (
    <>
      <h1>PlayGround</h1>
      <div>
        <p>Button</p>
        <Button
        >
          Default
        </Button>
      </div>
      <div>
        <p>accordion</p>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  )
}
