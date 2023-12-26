import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, MoreVertical } from "lucide-react";
import Link from "next/link";

const scripts = [
  {
    title: "The Godfather",
    genres: "Action, Drama",
    private: false,
    actions: "",
  },
  {
    title: "The Godfather 2",
    genres: "Action, Drama",
    private: false,
    actions: "",
  },
  {
    title: "Titanic",
    genres: "Action, Drama",
    private: false,
    actions: "",
  },
  {
    title: "The Shawshank Redemption",
    genres: "Action, Drama",
    private: false,
    actions: "",
  },
  {
    title: "The Dark Knight",
    genres: "Action, Drama",
    private: false,
    actions: "",
  },
  {
    title: "Schindler's List",
    genres: "Action, Drama",
    private: false,
    actions: "",
  },
  {
    title: "Pulp Fiction",
    genres: "Action, Drama",
    private: false,
    actions: "",
  },
  {
    title: "The Lord of the Rings: The Return of the King",
    genres: "Action, Drama",
    private: false,
    actions: "",
  },
  {
    title: "The Good, the Bad and the Ugly",
    genres: "Action, Drama",
    private: false,
    actions: "",
  },
  {
    title: "Fight Club",
    genres: "Action, Drama",
    private: false,
    actions: "",
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    genres: "Action, Drama",
    private: false,
    actions: "",
  },
  {
    title: "Forrest Gump",
    genres: "Action, Drama",
    private: false,
    actions: "",
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    genres: "Action, Drama",
    private: false,
    actions: "",
  },
  {
    title: "Inception",
    genres: "Action, Drama",
    private: false,
    actions: "",
  },
  {
    title: "The Lord of the Rings: The Two Towers",
    genres: "Action, Drama",
    private: false,
    actions: "",
  },
  {
    title: "One Flew Over the Cuckoo's Nest",
    genres: "Action, Drama",
    private: false,
    actions: "",
  },
  {
    title: "Goodfellas",
    genres: "Action, Drama",
    private: false,
    actions: "",
  },
  {
    title: "The Matrix",
    genres: "Action, Drama",
    private: false,
    actions: "",
  },
];

export function PublishedScripts() {
  return (
    <div className="container my-10">
      <Card>
        {/* <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader> */}
        <CardContent>
          <Table>
            <TableCaption>A list of your published scripts.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Title</TableHead>
                <TableHead>Genres</TableHead>
                <TableHead>Private</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {scripts.map((script) => (
                <TableRow key={encodeURI(script.title.toLowerCase())}>
                  <TableCell className="w-[50%] font-medium">
                    <Link href={`/app/scripts/${encodeURI(script.title.toLowerCase())}`} className="hover:underline">
                    {script.title}
                    </Link>
                  </TableCell>
                  <TableCell>{script.genres}</TableCell>
                  <TableCell>
                    <Badge variant={script.private ? "default" : "outline"}>
                      {script.private ? "YES" : "NO"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>

              ))}
            </TableBody>
            {/* <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total</TableCell>
                <TableCell className="text-right">$2,500.00</TableCell>
              </TableRow>
            </TableFooter> */}
          </Table>
        </CardContent>
        {/* <CardFooter>
          <p>Card Footer</p>
        </CardFooter> */}
      </Card>
    </div>
  );
}
