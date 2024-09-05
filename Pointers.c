#include<stdio.h>
int main(){
   int A[]={1,1,3,5,6,8,9};
    for (int i = 0;i<7;i++){
        printf("%p\n",&A[i]);
        printf("%p\n",A+i);
        printf("%d\n",A[i]);
        printf("%d\n",*(A+i));
    }
}