import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useCreateCourseMutation } from '@/features/api/courseApi'
import { Loader2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

const AddCourse = () => {

    const [courseTitle, setCourseTitle] = useState("");
    const [category, setCategory] = useState("");
    const [createCourse, {data, isLoading, error, isSuccess}] = useCreateCourseMutation();

    const navigate = useNavigate();
    // const isLoading = false;

    const createCourseHandler = async() => {
        await createCourse({courseTitle, category});
    }

    const getSelectedCategory = (value) =>{
        setCategory(value);
    }

    useEffect(() => {
        if(isSuccess){
            toast.success(data.message || "Course Created")
            navigate('/admin/course');
        }
    }, [isSuccess, error])

    return (
        <div className='flex-1 mx-10'>
            <div className="mb-4">
                <h1 className="font-bold text-xl">Lets add course</h1>

                <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati porro, dolore iusto assumenda fuga doloribus sint dicta, dolor atque repellendus fugiat quia mollitia, vitae architecto. Ex ab reprehenderit tempora amet!</p>
            </div>
            <div className='space-y-4'>
                <div>
                    <Label>Title</Label>
                    <Input
                        type='text'
                        value={courseTitle}
                        onChange={(e) => setCourseTitle(e.target.value)}
                        placeholder='Your Course Name'
                    />
                </div>
                <div>
                    <Label>Category</Label>
                    <Select onValueChange={getSelectedCategory}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a Course" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Course</SelectLabel>
                                <SelectItem value="next">NextJs</SelectItem>
                                <SelectItem value="ds">Data Scienc</SelectItem>
                                <SelectItem value="html">HTML</SelectItem>
                                <SelectItem value="python">Python</SelectItem>
                                <SelectItem value="react">React js</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <div className='flex items-center gap-2'>
                    <Button variant='outline' onClick={()=>navigate('/admin/course')}>Back</Button>
                    <Button disabled={isLoading} onClick={createCourseHandler}>
                        {
                            isLoading?(
                                <>
                                <Loader2 className='mr-2 h-4 w-4 animate-spin'/>
                                Please Wait
                                </>
                            ):"Create"
                        }
                        </Button>
                </div>
            </div>
        </div>
    )
}

export default AddCourse
