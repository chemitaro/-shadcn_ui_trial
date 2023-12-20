"use client"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


export function ProfileForm() {
  // 2. Define a submit handler.
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(e.target)
  }

  return (
    <form
      onSubmit={(e) => {onSubmit(e)}}
      className="space-y-8"
    >
      <FormItem>
        <FormLabel>Username</FormLabel>
        <Input placeholder="shadcn"/>
        <FormDescription>
          This is your public display name.
        </FormDescription>
        <FormMessage />
      </FormItem>
      <Button type="submit">Submit</Button>
    </form>
  )
}