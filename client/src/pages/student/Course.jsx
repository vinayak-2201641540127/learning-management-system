import { AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'

const Course = () => {
    return (
        <Card className='overflow-hidden rounded-lg dark:bg-gray-800 bg-white shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300'>
            <div className='relative'>
                <img
                    src='https://img-c.udemycdn.com/course/750x422/3873464_403c_3.jpg'
                    className='w-full h-36 object-cover rounded-t-lg'
                    alt="Course_loading" />
            </div>
            <CardContent className='px-5 py-4 space-y-3'>
                <h1 className='hover:underline font-bold text-lg truncate'>Nextjs Complete Course</h1>
                <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <Avatar classNam='h-8 w-8'>
                        <AvatarImage src="https://github.com/shadcn.png" className="w-8 h-8" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <h1 className='font-medium text-sm'>Patel MernStack</h1>
                </div>
                <Badge className='bg-blue-600 text-white px-2 py-1 text-xs rounded-full'>
                    Begin
                </Badge>
                </div>
                <div className='text-lg font-bold'>
                    <span>₹499</span>
                </div>
                
            </CardContent>
        </Card>
    )
}

export default Course