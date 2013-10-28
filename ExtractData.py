import pprint 

def main():
    lines = []
    with open("./Data/TransData.dat", "r") as f:
        try:
            items = f.readlines()
            for item in items:
                i = 0
                j = ""
                while (i < len(item)):
                    if item[i] == "=":
                        if item[i-3] == ' ':
                            j = item[i-2:i]
                            j = finditem(j)
                            if j!= None:
                                item = item[0:i-2] + j + item[i:-1]
                        else:  
                            j = item[i-3:i]
                            j = finditem(j)
                            if j!= None:
                                item = item[0:i-3] + j + item[i:-1]
                    i+=1
                lines.append(item)                  
                

            pass
        except:
            pass
        finally:
            return lines
     
def finditem(input):
    with open("map.txt", "r") as f:
        try:
            items = f.readlines()
        
            j = 0
            while j < len(items):
                item = items[j]

                while (item[0] != ("C" or "T")):
                    item = items[j] 
                    j+=1
                                    
                #counts columns
                c = 0
                #iterates through string
                i = 0
                #current character
                l = ''
                
                #ignore what's before the first two columns
                while (c < 2 and item[i] != ''):
                    l = item[i]
                    if (l == '|'):
                        c+=1
                    i+=1
                
                #grab the next 2 or three characters
                l = item[i] + item[i+1]
                if item[i+2] != '|':
                    l = l + item[i+2]
                    i+=1
                
                #is it equal to my input string?
                if l == input:
                    i = i+3
                    r = ""
                    
                    #if so, see what it translates to.
                    while item[i]!= '|':
                        r = r + item[i]
                        i+= 1       
                    return r;
                j+=1
        except:
            pass
        
#print(main())
#pprint.pprint(main())