#include <stdio.h>
#include <stdlib.h>

int main()
{
    int vec[5]={0},i; //declara el vector
    vec[2]=4; //asignación a uno de los elementos del vector
    vec[5]= 3+vec[2]; // 3+4

    for(i=0;i<6;i++)
    {
        printf("%d\n",vec[i]);
    }

    scanf("%d", &vec[2]);

    for(i=0;i<6;i++)
    {
        printf("%d\n",vec[i]);
    }
    return 0;
}
