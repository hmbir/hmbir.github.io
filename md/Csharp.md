```vb
using System;
using System.IO;
using System.Text.RegularExpressions;

namespace Deleteimage
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("请输入需要删除的Markdown路径(路径不带\assets)：");
            string basePath = Console.ReadLine();
            Console.WriteLine("请输入Markdown文件的名字(不用加.md)");
            string mdFileName = Console.ReadLine();
                StreamReader streamReader = new StreamReader($@"{basePath}\{mdFileName}.md");
                String UAES = streamReader.ReadToEnd();
                MatchCollection imageText;
                imageText = Regex.Matches(UAES, @"(!\[image\-)(\w*\]\(assets\/image-)(.)*(png\))");
            
                //第一种方法获取指定格式
                var files = Directory.GetFiles($@"{basePath}\assets", "*.png");
                int k = 0;
                bool canFind = false;
                foreach (var item in files)
                {
                    canFind = false;
                    foreach (var item1 in imageText)
                    {
                        if (item1.ToString().Contains(item.Split("\\")[^1]))
                        {
                            //Console.WriteLine("Markdown:"+item);

                            canFind = true;
                            break;
                        }
                    }
                    if (!canFind)
                    {
                        k++;
                        File.Delete(item);
                        Console.WriteLine(item);
                    }
                }
                Console.WriteLine("删除.png图片数量：" + k);

                //foreach (var item in files)
                //{
                //    Console.WriteLine(item.Split("\\")[^1]);
                //}
                //Console.WriteLine();
                //foreach (var item in imageText)
                //{

                //    Console.WriteLine(item.ToString());
                //}
                Console.WriteLine("再次删除请按回车");
                Console.ReadLine();
        }
    }
}
```