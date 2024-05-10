//javascript execution context
//{}-> global execution context  ->refer kr diya jata hai-> this
//java script is single threded
// 1.global execution Context
// funciton execution context
//eval execution context

/* java script code run in two phases
    1.memory creation phase (creation phase)
    {isme sirf variable ya jo bhi apne declare kiya hia unhe jagha allocate hoti hai , per unhe execute nhi krra jata hai}
    
    2 execution phase

    running code
    step 1;global execution(this)
    step 2: memory phase (sab ko ekhatha krke rakha jata hai undefined)
    val1->undefined
    val2->undefined
    addnum->function defintion
    result 1->undefined
    result2->undefined
    step 3:execution phase
    val1->10;
    val2->5;
    result1->addnum->new variable environment + execution tread
            here again step 2 and step 3 will repear for this .
            step1(val1->undefined
            val2->undefined
            total->undefined)
            step2(
                num1=10;
                num2=5;
                total=15;
            )
            aafter work ,it is deleted


call stack
            |                |
            |                |
            |                |
            |_____three()____|  
            |_____two()______|
            |___  one()______|
            |global execution|
            ------------------
*/