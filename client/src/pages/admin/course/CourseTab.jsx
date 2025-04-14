import RichTextEditor from '@/components/RichTextEditor';
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import React, { useState } from 'react'

const CourseTab = () => {
    const isPublished = false;
    const [input, setInput] = useState({
        courseTitle: "",
        subTitle: "",
        description: "",
        category: "",
        courseLevel: "",
        coursePrice: "",
        courseThumbnail: ""
    });

    const changeEventHandler = (e) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    }

    return (
        <Card>
            <CardHeader className='flex flex-row justify-between'>
                <div>
                    <CardTitle>
                        Basic Course Information
                    </CardTitle>
                    <CardDescription>
                        Make Changes to your courses here. Click save when you're done.
                    </CardDescription>
                </div>
                <div className='space-x-2'>
                    <Button variant='outline'>
                        {
                            isPublished ? "Unpublished" : "Publish"
                        }
                    </Button>
                    <Button>Remove Course</Button>
                </div>
            </CardHeader>
            <CardContent>
                <div className='space-y-4 mt-5'>
                    <div>
                        <Label>Title</Label>
                        <Input
                            type='text'
                            name='courseTitle'
                            value={input.courseTitle}
                            onChange={changeEventHandler}
                            placeholder='Ex. Full Stack Developer'
                        />
                    </div>
                    <div>
                        <Label>SubTitle</Label>
                        <Input
                            type='text'
                            name='subTitle'
                            value={input.subTitle}
                            onChange={changeEventHandler}
                            placeholder='Ex. Become a Full Stack Developer'
                        />
                    </div>
                    <div>
                        <Label>Description</Label>
                        <RichTextEditor input={input} setInput={setInput} />
                    </div>
                    <div className='flex items-center gap-5'>
                        <div>
                            <Label>Category</Label>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a Course" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Category</SelectLabel>
                                        <SelectItem value="next">NextJs</SelectItem>
                                        <SelectItem value="ds">Data Scienc</SelectItem>
                                        <SelectItem value="html">HTML</SelectItem>
                                        <SelectItem value="python">Python</SelectItem>
                                        <SelectItem value="react">React js</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label>Course Level</Label> 
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a Course level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Course Level</SelectLabel>
                                        <SelectItem value="beginner">Beginner</SelectItem>
                                        <SelectItem value="Medium">Medium</SelectItem>
                                        <SelectItem value="Advance">Advance</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Label>Price in (INR)</Label>
                            <Input
                            type='number'
                            name='coursePrice'
                            value={input.coursePrice}
                            onChange={changeEventHandler}
                            placeholder='199'
                            className='w-fit'
                            />
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default CourseTab
