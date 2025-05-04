<script setup lang="ts">
import DashboardHeader from './dashboard/DashboardHeader.vue'
import DashboardScoreCards from './dashboard/DashboardScoreCards.vue'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const students = [
  {
    id: 1,
    name: 'John Doe',
    workCompleted: 10,
    averageScore: 80,
    needingAttention: 2,
    workingTowards: 5,
    mastered: 3,
  },
  {
    id: 2,
    name: 'Anna Maria',
    workCompleted: 12,
    averageScore: 90,
    needingAttention: 1,
    workingTowards: 6,
    mastered: 4,
  },

  {
    id: 3,
    name: 'Richard Doe',
    workCompleted: 8,
    averageScore: 85,
    needingAttention: 3,
    workingTowards: 5,
    mastered: 2,
  },

  {
    id: 4,
    name: 'Something Doe',
    workCompleted: 2,
    averageScore: 10,
    needingAttention: 2,
    workingTowards: 2,
    mastered: 2,
  },

  {
    id: 2,
    name: 'Anna Maria',
    workCompleted: 12,
    averageScore: 90,
    needingAttention: 1,
    workingTowards: 6,
    mastered: 4,
  },

  {
    id: 3,
    name: 'Richard Doe',
    workCompleted: 8,
    averageScore: 85,
    needingAttention: 3,
    workingTowards: 5,
    mastered: 2,
  },

  {
    id: 4,
    name: 'Something Doe',
    workCompleted: 2,
    averageScore: 10,
    needingAttention: 2,
    workingTowards: 2,
    mastered: 2,
  },
]
</script>

<template>
  <div class="w-full h-full rounded-t-[5rem] bg-[#F2F9FF] px-[5rem] py-[2rem]">
    <!-- Dashboard Header -->
    <div class="mb-[2rem]">
      <dashboard-header />
    </div>

    <!-- Dashboard Score Cards -->
    <dashboard-score-cards />

    <!-- Dashboard Table -->
    <div class="w-full min-h-[362px] mt-[2rem]">
      <div class="w-full p-[2rem] rounded-[2rem] bg-white">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead class="w-[100px]">Full Name</TableHead>
              <TableHead>Work Completed</TableHead>
              <TableHead>Average Score</TableHead>
              <TableHead>Needing Attention</TableHead>
              <TableHead>Working Towards</TableHead>
              <TableHead>Mastered</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="student in students" :key="student.name">
              <TableCell class="font-medium">
                <div class="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>SC</AvatarFallback>
                  </Avatar>
                  <div class="text-[0.8rem]">{{ student.name }}</div>
                </div>
              </TableCell>
              <TableCell class="">
                {{ student.workCompleted }}
              </TableCell>
              <TableCell>{{ student.averageScore }}</TableCell>
              <TableCell>
                {{ student.needingAttention }}
              </TableCell>
              <TableCell>
                {{ student.workingTowards }}
              </TableCell>
              <TableCell>
                {{ student.mastered }}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
