#include <stdio.h>
#include <stdlib.h>

int main()
{
    int vec[10]={100,200,300,400,500,600,700,800,900,1000};
    int i,*p;
    p=vec;



    printf("Contenido de la pos 1 :%d\n",*(p+1)); //200
    printf("Contenido de la pos 1 :%d\n",vec[1]); //200

    printf("Direccion de comienzo :%p\n",vec);
    printf("Direccion de comienzo :%p\n",p+1); //suma 4,int=4


    for(i=0;i<10;i++)
    {
        printf("%d\n",vec[i]);
    }
    return 0;
}
