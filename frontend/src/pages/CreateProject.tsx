import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import { Calendar as CalendarIcon } from "lucide-react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { PopoverClose } from "@radix-ui/react-popover"
import { Input } from "@/components/ui/input";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";

export default function CreateProject() {

    const navigator = useNavigate();

    const [loading, setLoading] = useState<boolean>(false);

    const [name, setName] = useState('');
    const [ticker, setTicker] = useState('');
    const [rent, setRent] = useState(100);
    const [amount, setAmount] = useState(1000000);
    const [supply, setSupply] = useState(20);
    const [deadline, setDeadline] = useState<Date>();

    async function createProject() {

        try {
            setLoading(true);
            // fetch the fundingData by the id here and then set using setHolding
            // const holding = fundingData.find(holding => holding.id === parseInt(holdingId));
            // setHolding(holding || null);	

        } catch(err){
            console.log(err);
            alert("Something went wrong! Try again");

        }finally{
            setLoading(false);
        }  
    }


    useEffect(() => {
        createProject();
    }, []);

    return (
        <div className='w-[100vw] h-[100vh]'>
            <div className="p-12 w-full md:px-36 lg:px-48">  
                <div className="w-full rounded-xl shadow-xl border-[1px] border-gray-200 p-6 space-y-4">
                    <div className="flex flex-row justify-between space-x-4">
                        <div className="flex flex-col w-full">
                            <p className="text-sm indent-2 py-2">Name</p>
                            <Input 
                                id="name"
                                type="text" 
                                placeholder="My Property Name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <p className="text-sm indent-2 py-2">Ticker</p>
                            <Input 
                                id="ticker"
                                type="text" 
                                placeholder="MYPRP" 
                                value={ticker}
                                onChange={(e) => setTicker(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between space-x-4">
                        <div className="flex flex-col w-full">
                            <p className="text-sm indent-2 py-2">Rental price per day</p>
                            <Input 
                                id="rent"
                                type="number" 
                                placeholder="100" 
                                value={rent}
                                onChange={(e) => setRent(parseInt(e.target.value))}
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <p className="text-sm indent-2 py-2">Amount to raise</p>
                            <Input 
                                id="Amount"
                                type="number" 
                                placeholder="1000000" 
                                value={amount}
                                onChange={(e) => setAmount(parseInt(e.target.value))}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row justify-between space-x-4">
                        <div className="flex flex-col w-full">
                            <p className="text-sm indent-2 py-2">Number of manager owners (NFT holders)</p>
                            <Input 
                                id="supply"
                                type="number" 
                                placeholder="20 (recommended)" 
                                value={supply}
                                onChange={(e) => setSupply(parseInt(e.target.value))}
                            />
                        </div>
                        <div className="flex flex-col w-full">
                            <p className="text-sm indent-2 py-2">Deadline</p>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-full justify-start text-left font-normal",
                                        !deadline && "text-muted-foreground"
                                    )}
                                    >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {deadline ? format(deadline, "PPP") : <span>Pick a deadline to close the project</span>}
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0">
                                    <PopoverClose>
                                        <Calendar
                                        mode="single"
                                        selected={deadline}
                                        onSelect={setDeadline}
                                        initialFocus
                                        />
                                    </PopoverClose> 
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>   
                    {loading ?
                        <Button disabled>
                            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                            Please wait
                        </Button>
                        :
                        <Button className="w-full bg-primary-500 hover:bg-primary-600" onClick={createProject}>Submit Project</Button>
                    }                
                </div>
            </div>
        </div>
    )
}