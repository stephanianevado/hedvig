import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { CreateReq } from 'app/api/create/route'
import { ContractsResp } from 'app/api/route'
import { TerminateReq } from 'app/api/terminate/route'

import fetchAPI from 'client/queries/queries'

import { Contract } from 'server/contracts/contracts'

export function useContracts() {
  return useQuery<ContractsResp>({
    queryKey: ['contracts'],
    queryFn: () => fetchAPI<ContractsResp>(''),
  })
}

export function useTerminateContract() {
  const queryClient = useQueryClient()
  return useMutation<Contract, unknown, TerminateReq>({
    mutationFn: (req) => fetchAPI<Contract>('/terminate', 'POST', req),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['contracts'] })
    },
  })
}

export function useCreateContract() {
  const queryClient = useQueryClient()
  return useMutation<Contract, unknown, CreateReq>({
    mutationFn: (req) => fetchAPI<Contract>('/create', 'POST', req),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['contracts'] })
    },
  })
}
