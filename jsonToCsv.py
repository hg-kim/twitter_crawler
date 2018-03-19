import csv, json, time
filename = "신과함께(20171221)"
toOpen = filename+".json"
outputFile = filename+".csv"
json_data = open(toOpen, encoding="utf-8").read()
data = json.loads(json_data)
f = open(outputFile, "w", encoding="utf-8", newline='')
wr = csv.writer(f)
i = 0


def getKey(item):
    return item[0]

wr.writerow(["idx", "text"])

for i in range(len(data)):
    wr.writerow([i, data[i]])

f.close()

f = open(outputFile, 'r', encoding='utf-8')
rdr = csv.reader(f)
for line in rdr:
    print(line)
f.close()



