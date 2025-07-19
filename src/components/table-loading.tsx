

import React, { Fragment } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton"

export default function TableLoading() {
  return (
          <Fragment>
            {/* Render 10 skeleton rows as a placeholder while loading */}
            {Array.from(new Array(10)).map((_, index) => (
                <TableRow key={index}>
                    {/* Render skeleton cells for each visible column */}
                    {/* {table.getVisibleLeafColumns().map((column) => ( */}
                        <TableCell >
                            <Skeleton variant="rounded" width="100%" height={8} />
                        </TableCell>
                    {/* ))} */}
                </TableRow>
            ))}
        </Fragment>
  )
}
