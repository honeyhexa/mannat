import { Separator } from '@/components/ui/separator';
import React from 'react'

const page = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Billing</h3>
        <p className="text-sm text-muted-foreground">
          Your current plan and billing information.
        </p>
      </div>
      <Separator />
    </div>
  )
}

export default page;