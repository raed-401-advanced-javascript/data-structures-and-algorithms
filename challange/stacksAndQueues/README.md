# Stacks and Queues
stack is way to roganize data depend on the last input who will be the fisrt output FILO 
qeueu also way to organize data depend on the first input wil be first output FIFO 
## Challenge
build class for stack can push the node and pop it and check is it empty and return the top 
also class for the qeue can check if it empty and can deqeue and inqeue 

## Approach & Efficiency
all the method have O(1) for the time except the qeue method deqeue have O(n) cause we loop throw the node to find the front 

## API
push : added item in the last 
pop : delete last item 
enqeue: add item in the last 
deqeue: remove the first item in the node 
peek : return value of front property 
is Empty : check if the node is empty 