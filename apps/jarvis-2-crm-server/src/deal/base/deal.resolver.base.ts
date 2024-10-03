/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Deal } from "./Deal";
import { DealCountArgs } from "./DealCountArgs";
import { DealFindManyArgs } from "./DealFindManyArgs";
import { DealFindUniqueArgs } from "./DealFindUniqueArgs";
import { CreateDealArgs } from "./CreateDealArgs";
import { UpdateDealArgs } from "./UpdateDealArgs";
import { DeleteDealArgs } from "./DeleteDealArgs";
import { DealService } from "../deal.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Deal)
export class DealResolverBase {
  constructor(
    protected readonly service: DealService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Deal",
    action: "read",
    possession: "any",
  })
  async _dealsMeta(
    @graphql.Args() args: DealCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Deal])
  @nestAccessControl.UseRoles({
    resource: "Deal",
    action: "read",
    possession: "any",
  })
  async deals(@graphql.Args() args: DealFindManyArgs): Promise<Deal[]> {
    return this.service.deals(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Deal, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Deal",
    action: "read",
    possession: "own",
  })
  async deal(@graphql.Args() args: DealFindUniqueArgs): Promise<Deal | null> {
    const result = await this.service.deal(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Deal)
  @nestAccessControl.UseRoles({
    resource: "Deal",
    action: "create",
    possession: "any",
  })
  async createDeal(@graphql.Args() args: CreateDealArgs): Promise<Deal> {
    return await this.service.createDeal({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Deal)
  @nestAccessControl.UseRoles({
    resource: "Deal",
    action: "update",
    possession: "any",
  })
  async updateDeal(@graphql.Args() args: UpdateDealArgs): Promise<Deal | null> {
    try {
      return await this.service.updateDeal({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Deal)
  @nestAccessControl.UseRoles({
    resource: "Deal",
    action: "delete",
    possession: "any",
  })
  async deleteDeal(@graphql.Args() args: DeleteDealArgs): Promise<Deal | null> {
    try {
      return await this.service.deleteDeal(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
