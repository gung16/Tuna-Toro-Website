import * as React from "react"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const Slider = () => {
    const Menu = [
        {
            image: "/signature/menu1.png",
            title: "Rahang Tuna Bakar",
            desc: "Grilled tuna jaws with the flavor of the sea and an authentic grilled aroma."
        },
        {
            image: "/signature/menu2.png",
            title: "Wakame Salad",
            desc: "Crisp greens, vibrant veggies, and zesty dressing create a refreshing combination"
        },
        {
            image: "/signature/menu3.png",
            title: "Salmon Crunchy Roll",
            desc: "Fresh slices of salmon expertly placed on perfectly seasoned rice"
        },
        {
            image: "/signature/menu4.png",
            title: "Sup Dada Tuna",
            desc: "Warm tuna breast soup served with rich-flavored broth and fresh ingredients"
        }
    ]
    return (<div className="flex justify-center items-center w-full">
        <Carousel className="w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-6xl pt-10">
            <CarouselContent className="-ml-1">
                {Menu.map((item) => (
                    <CarouselItem
                        key={item.title}
                        className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 flex justify-center items-center"
                    >
                        <div className="flex flex-col mb-10 group relative shadow-lg text-white rounded-xl px-4 py-5 md:px-6 md:py-8 h-[220px] w-[180px] sm:h-[250px] sm:w-[215px] md:h-[280px] md:w-[250px] lg:h-[350px] lg:w-[300px] xl:h-[400px] xl:w-[350px] overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${item.image})` }}
                            />
                            <div className="relative flex flex-col gap-1 md:gap-2">
                                <h1 className="text-center lg:text-left text-sm sm:text-base font-semibold lg:text-xl">
                                    {item.title}
                                </h1>
                                <p className="hidden lg:block lg:font-light lg:text-sm lg:opacity-75">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute lg:hidden left-2 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-opacity-80 transition-all" />
            <CarouselNext className="absolute lg:hidden right-2 top-1/2 -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-opacity-80 transition-all" />
        </Carousel>
    </div>

    )
}

export default Slider

