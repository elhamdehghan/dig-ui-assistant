'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { TextField } from '@/components/ui/text-field'
import { PasswordField } from '@/components/ui/password-field'
import { Link } from '@/components/ui/link'
import { Alert, AlertDescription } from '@/components/ui/alert'

const loginSchema = z.object({
  email: z.string().email('قالب ایمیل درست نیست'),
  password: z.string().min(1, 'رمز عبور الزامی است'),
  remember: z.boolean().default(false),
})

type LoginFormValues = z.infer<typeof loginSchema>

export default function LoginForm() {
  const [error, setError] = React.useState<string | null>(null)
  const [isLoading, setIsLoading] = React.useState(false)

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      remember: false,
    },
  })

  async function onSubmit(values: LoginFormValues) {
    setError(null)
    setIsLoading(true)

    try {
      // شبیه‌سازی درخواست سرور
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // بررسی اعتبارات (مثال)
      if (values.email === 'test@example.com' && values.password === 'password') {
        console.log('ورود موفق:', values)
      } else {
        setError('ایمیل یا رمز عبور اشتباه است')
      }
    } catch (err) {
      setError('خطایی در سرور رخ داد')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-stack">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-stack-tight">
          <CardTitle>ورود به حساب</CardTitle>
          <CardDescription>ایمیل و رمز عبور خود را وارد کنید</CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-stack">
            {error && (
              <Alert color="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <TextField
              label="ایمیل"
              type="email"
              placeholder="armita@dig.ir"
              required
              disabled={isLoading}
              invalid={!!form.formState.errors.email}
              errorMessage={form.formState.errors.email?.message}
              {...form.register('email')}
            />

            <PasswordField
              label="رمز عبور"
              placeholder="رمز عبور خود را وارد کنید"
              required
              disabled={isLoading}
              invalid={!!form.formState.errors.password}
              errorMessage={form.formState.errors.password?.message}
              {...form.register('password')}
            />

            <div className="flex items-center gap-inline-tight">
              <Checkbox
                id="remember"
                disabled={isLoading}
                {...form.register('remember')}
              />
              <Label htmlFor="remember" className="text-sm">
                مرا به خاطر بسپار
              </Label>
            </div>

            <Button
              type="submit"
              fullWidth
              disabled={isLoading}
              loading={isLoading}
            >
              {isLoading ? 'در حال ورود…' : 'ورود'}
            </Button>

            <div className="space-y-stack-tight text-center text-sm">
              <p className="text-muted-foreground">
                حساب کاربری ندارید؟{' '}
                <Link href="/signup" className="font-medium">
                  ثبت‌نام کنید
                </Link>
              </p>
              <Link href="/forgot-password" className="text-xs">
                رمز عبور را فراموش کردید؟
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}